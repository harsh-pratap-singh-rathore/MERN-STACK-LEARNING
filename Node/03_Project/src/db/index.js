import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"
import express from "express"

const app = express();

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Connection Successful on HOST : ${connectionInstance.connection.host}`);
        app.on("error",(error)=>{
            console.log("ERR : " , error)
            throw error
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listning on port ${process.env.PORT}`);
            
        })

    } catch (error) {
        console.log("ERROR IS :", error);
        
    }
}

export default connectDB;