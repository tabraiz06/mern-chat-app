const jwt = require('jsonwebtoken')
 
const createToken=(id,res)=>{
 const token =   jwt.sign({id},process.env.KEY,{expiresIn:"1d"})
    res.cookie("token",token,{
        httpOnly: true, //xss attack
        secure : true,
        sameSite:"strict" // csrf atteck
    })
}

module.exports= createToken