import { useState } from 'react'
import axiosInstance from '../api/axios';
import { data, useNavigate } from 'react-router-dom';
 




const Login=()=>{
    const Navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const inputClass = "w-[90%] text-lg py-2 px-4 outline-none bg-[#F3F2FC] my-3 text-gray-700 "


    const handleSubmit= async(e)=>{
        e.preventDefault();
       try {
        const res = await axiosInstance.post("/login",{
            email,password
        })
        localStorage.setItem("token",res.data.token)
        localStorage.setItem("user",JSON.stringify(res.data.userFoundOrNot))
        Navigate("/dashboard")
        
       } catch (error) {
        console.log("login error",error)
       }
        
    }

    return(
        <div className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%] 
                        mt-20 mb-[10px] mx-auto box-border 
                        shadow-[0_0_10px_rgba(0,0,0,0.15)] 
                        font-sans flex flex-col items-center">

            <h1 className="text-3xl mt-3">Login page</h1>
            <div className='text-center'>
           
                <input type="email" 
                className={inputClass}
                placeholder="Enter your email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
        
                <input type="password" 
                className={inputClass}
                placeholder="Enter your password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}

                />
            </div>
            <button type='submit' className='text-xl mt-2 w-[90%] bg-blue-400 hover:bg-blue-500 text-white rounded-sm transition-all duration-300 hover:rounded-3xl py-1' onClick={handleSubmit}>Login</button>
            <p className='text-gray-400 text-sm hover:text-gray-500 mb-3 mt-1' onClick={()=>Navigate("/signup")}>Don't have an account?</p>
        </div>
    )
}
export default Login