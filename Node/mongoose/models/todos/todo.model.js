import mongoose  from "mongoose";

const todoschema = new mongoose.Schema(
    {
            content : {
                type : String,
                required : true,
            },
            completed : {
                type : Boolean,
                default : false
            },
            createdBy : {
                type : mongoose.Schema.Types.ObjectId,
                ref : "User"
            },
            subtodo : [
                {
                    type : mongoose.Schema.Types.ObjectId,
                    ref : "subtodo"
            }]
},{timestamps : true})

export const todo = mongoose.model("todo",todoschema)
