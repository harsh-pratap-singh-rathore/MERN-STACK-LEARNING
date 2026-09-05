import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiError.js';
import { User } from "../Models/user.model.js"
import { uploadToCloudinary } from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import jwt from "jsonwebtoken"

const generateAccessAndRefreshToken = async(userId) =>{
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()    
        user.refreshToken = refreshToken
        await user.save({validateBeforeSave : false})

        return { accessToken, refreshToken }

    } catch (error) {
        throw new ApiError(500 , "Something Went Wrong While Generating Refresh and Access Token !")
    }

}

const registerUser = asyncHandler(async (req , res) => {
   
    //get Details from Frontend 
    //Check if any empty
    //check username or email exists in DB 
    //check user uploaded avatar img 
    //remove refresh token & password from response 
    //create object in DB 
    //print the response 

    const {username , email , fullName , password} = req.body || {}
    console.log("EMAIL IS : ", {email});

    if (
        [fullName , email , username , password].some((field) => 
        !field || field.trim() === "")
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
const loginUser = asyncHandler(async (req, res) => {
    //Check username & email available in DB 
    //Check for correct Pass
    //give access & refresh Token
    //store in DB 
    //send Cookie

    const {username , email , password} = req.body

    if (!(username || email)) {
        throw new ApiError(400 , "Username or Email is required !!")
    }
    if (!password) {
        throw new ApiError(400 , "Password is required !!")
    }

    const user = await User.findOne({
        $or : [{ username },{ email }]
    })
    if(!user){
        throw new ApiError(400,"User Dosen't Exists !! ")
    }
    const isPasswordValid = await user.isPasswordCorrect(password)
    if(!isPasswordValid){
        throw new ApiError(400,"Invalid Password !! ")
    }

    const { accessToken , refreshToken } = await generateAccessAndRefreshToken(user._id)
    const loggedInUser = await User.findById(user._id).
    select("-password -refreshToken")
    const options = { 
        httpOnly : true,
        secure : true
    }
    return res
    .status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options)
    .json(
        new ApiResponse(200 , {
            user : loggedInUser , accessToken , refreshToken
        },
        "User Logged In Successfully !! "
        )
    )
})
const logoutUser = asyncHandler(async (req ,res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: 1
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(200, {}, "User Logged Out Successfully !!"))
})

const refreshAccessToken = asyncHandler(async (req, res) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken

    if (!incomingRefreshToken) {
        throw new ApiError(401, "Unauthorized request")
    }

    try {
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        )

        const user = await User.findById(decodedToken?._id)

        if (!user) {
            throw new ApiError(401, "Invalid refresh token")
        }

        if (incomingRefreshToken !== user?.refreshToken) {
            throw new ApiError(401, "Refresh token is expired or used")
        }

        const options = {
            httpOnly: true,
            secure: true
        }

        const { accessToken, refreshToken: newRefreshToken } = await generateAccessAndRefreshToken(user._id)

        return res
            .status(200)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", newRefreshToken, options)
            .json(
                new ApiResponse(
                    200,
                    { accessToken, refreshToken: newRefreshToken },
                    "Access token refreshed"
                )
            )
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid refresh token")
    }
})

export { registerUser, loginUser, logoutUser, refreshAccessToken }