const mongoose= require('mongoose')
const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
    unique: true,
  },
  image: {
    type: String,
    require: true,
    
  },
  password:{
    
   type: String,
    require: true,
    unique:true
   
  }
},{timestamps:true});

module.exports= mongoose.model('user',userSchema)