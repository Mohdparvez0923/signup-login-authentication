import jwt from 'jsonwebtoken'
import User from '../models/user.js';

export const verifyLogin = async(req,res,next)=>{
try {
    const {authorization} = req.headers
    if (!authorization) {
        return res.status(401).json({msg:"access denied, unauthorized person"})
    }

    const token = authorization.replace("Bearer ","");
    const payload = jwt.verify(token,process.env.SECRET_KEY);
    const {id} = payload;
    const user = await User.findById(id)
    req.userData = user
    console.log(user)
    next()
    
} catch (error) {
    console.log("error while verifying the token",error)
}
}