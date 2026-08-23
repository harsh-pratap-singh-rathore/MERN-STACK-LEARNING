import dns from "node:dns"
import dotenv from "dotenv"
import connectDB from "./db/index.js"
// Using Google DNS because MongoDB Atlas SRV lookup
// was failing with the system DNS.
dns.setServers(["8.8.8.8", "8.8.4.4"])

dotenv.config({
    path: "./.env"
})

connectDB();