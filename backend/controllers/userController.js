import user from "../models/user.js";
import User from "../models/user.js";
import { comparePassword, hashPassword } from '../utils/encrypt.js'
import jwt from 'jsonwebtoken'


export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ msg: "user already exists" })
    } else {
      const newUser = User({
        name,
        email,
        password: await hashPassword(password)
      })
      const result = await newUser.save()
      return res.status(200).json({ msg: "user created successfully", result })
    }
  } catch (error) {
    console.log("error while creating user", error)
  }
}


export const login = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({ msg: "bad request" })
    } else {
      const userFoundOrNot = await User.findOne({ email })
      if (userFoundOrNot) {
        const isPassCorrectOrNot = await comparePassword(password, userFoundOrNot.password)
        if (!isPassCorrectOrNot) {
          return res.status(403).json({ msg: "invalid password" })
        }

        const payload = { id: userFoundOrNot.id, email: userFoundOrNot.email }
        const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "2h" })
        return res.status(200).json({ msg: "user logged in successfully", token,userFoundOrNot })
      } else {
        return res.status(403).json({ msg: "invalid email" })
      }
    }

  } catch (error) {
    console.log("error while login", error)
  }
}

export const profile = async (req,res) => {
   return res.json({
    msg:"protected",
    email:req.userData.email
   })
}

export const fetchUser = async(req,res)=>{
  try {
    const {id} = req.params
    const User = await user.findById(id)

    if(!User){
      return res.status(404).json({msg:"user not found"})
    }else{
      return res.status(200).json({msg:"user Found successfully",User})
    }
  } catch (error) {
    console.log("error while fetching user",error)
  }
}