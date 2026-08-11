import 'dotenv/config'
import express from 'express'

const app = express()

const port = 4000

app.get('/' , (req , res)=>{
    res.send('Hello World')
})
app.get('/login' , (req , res)=>{
    res.send('<h1>This is Login Page</h1>')
})


app.listen(process.env.PORT , ()=>{
    console.log(`Listening on port ${process.env.PORT}`);
    
})