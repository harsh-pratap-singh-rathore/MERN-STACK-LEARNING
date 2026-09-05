import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiError.js';
import { User } from "../Models/user.model.js"
import { uploadToCloudinary } from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js"
const registerUser = asyncHandler(async (req , res) => {
   
    //get Details from Frontend 
    //Check if any empty
    //check username or email exists in DB 
    //check user uploaded avatar img 
    //remove refresh token & password from response 
    //create object in DB 
    //print the response 

    const {username , email , fullName , password} = req.body
    console.log("EMAIL IS : ", {email});

    if (
        [fullName , email , username , password].some((field) => 
        field?.trim() === "")
    ) {
        throw new ApiError(400 , "All Fields Are Mandatory!!! ")
    }

    const existedUser = await User.findOne({
        $or : [{ username } , { email }]
    })

    if(existedUser){
        throw new ApiError(409 , "Username or email already Exists !!")
    }
    const avatarLocalPath = req.files?.avatar?.[0]?.path
    let coverImageLocalPath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
        coverImageLocalPath = req.files.coverImage[0].path;
    }

    if(!avatarLocalPath) { 
        throw new ApiError(400,"Avatar File Is Mandatory!! ")
    }
    const avatar = await uploadToCloudinary(avatarLocalPath)
    const coverImage = await uploadToCloudinary(coverImageLocalPath)

    if (!avatar) {
        throw new ApiError(400, "Avatar file upload failed")
    }

    const user = await User.create({
        fullName,
        avatar : avatar.url,
        coverImage : coverImage?.url || "",
        email,
        username : username.toLowerCase(),
        password
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )
    if(!createdUser) {
        throw new ApiError(500 , "Something Went Wrong While Registering the User !")
    }
    return res.status(201).json(
        new ApiResponse(200 , createdUser , "User Registered Successfully !! ")
    )

})


export { registerUser }