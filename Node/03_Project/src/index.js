import dns from "node:dns"
import dotenv from "dotenv"

dotenv.config({
    path: "./.env"
})

import connectDB from "./db/index.js"
import {app} from "./app.js"
// Using Google DNS because MongoDB Atlas SRV lookup
// was failing with the system DNS.
dns.setServers(["8.8.8.8", "8.8.4.4"])

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`Server Listening on PORT :${process.env.PORT}`);
        
    })
})
.catch((error)=>{
    console.log("MONGO DB CONNECTION FAILED : " , error);
    
}) 