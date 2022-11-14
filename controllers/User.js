//methods
// - register 
// - login
// - update
// - delete
// - get
const User = require("../models/User");
const ApiError = require("../ErrorHandler/Error");


const Register = async (req,res,next) => {
    try {
        const user = await new User({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
           });
       const saveduser = await user.save();
        res.status(200).json(saveduser); 
    } catch (error) {
       console.log(error);
    }
}

const GetUser = async(req,res,next) => {
 try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
 } catch (error) {
    next(ApiError.InternalServerError(error));
 }
}

const GetUsers = async(req,res,next) => {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (error) {
        next(ApiError.InternalServerError(error));
    }
}

const DeleteUser = async(req,res,next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("user has been deleted")
    } catch (error) {
        next(ApiError.InternalServerError(error));
    }
}

module.exports = {Register,GetUser,GetUsers,DeleteUser};