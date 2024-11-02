const express= require('express')
const mongoose= require('mongoose')
const cors= require('cors')
const dotenv= require('dotenv')
dotenv.config()

const app= express()

app.use(cors())
app.use(express.json())

const url = process.env.URL;
const port= process.env.PORT

app.get('/',(req,res)=>{
    res.send('hello world')
})

mongoose.connect(url).then(()=>console.log('db connection successfull')).catch(()=>console.log('error in db connection'))
app.listen(port, () => console.log(`server is running at ${port}`));
