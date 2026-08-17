import mongoose from "mongoose"

const userSchema = mongoose.Schema(
    {
        username : {
            type : String,
            lowercase : true,
            required : true,
            unique : true
        },
        email : { 
            type : String,
            lowercase : true,
            required : true,
            unique : true
        },
        password : {
            type : String,
            lowercase : true,
            required : true,
            unique : true
        }
    }, {timestamps : true}
)

export const User = new mongoose.model("User",userSchema);

