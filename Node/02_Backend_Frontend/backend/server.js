import express from "express";

const app = express()
const port = 4000

app.get('/api/jokes',(req , res)=>{
    const jokes = [
        {
            id : 1,
            content : "Joke 1"
        },{
            id : 2,
            content : "Joke 2"
        },{
            id : 3,
            content : "Joke 3"
        }
    ]
    res.send(jokes)
})

app.listen(port,()=>{
    console.log(`Port Listening on ${port}`);
    
})