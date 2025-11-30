import { useState } from 'react'
import { signupUser } from '../api/authControllers';
import { useNavigate } from 'react-router-dom';



const Signup = () => {
    const Navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const inputClass = "w-[90%] text-lg py-2 px-4 outline-none bg-[#F3F2FC] my-3 text-gray-700"

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await signupUser({name,email,password})
            Navigate("/login")

            
        } catch (error) {
            console.log("error",error)
        }
    }

    return (
        <div className='p-3'>
           <div className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%] 
     mt-20 mb-[10px] mx-auto box-border 
     shadow-[0_0_10px_rgba(0,0,0,0.15)] 
     font-sans flex flex-col items-center">

            <h1 className="text-3xl mt-3">Signup page</h1>
            <div className='mt-2 text-center w-[100%]'>

                <input type="name"
                    className={inputClass}
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input type="email"
                    className={inputClass}

                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input type="password"
                    className={inputClass}

                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}

                />
            </div>
            <button type='submit' className='text-xl mt-2 w-[90%] bg-blue-400 hover:bg-blue-500 rounded-sm transition-all duration-300 text-white hover:rounded-3xl py-1' onClick={handleSubmit}>Signup</button>
            <p className='text-gray-400 hover:text-gray-500 mb-3 mt-1 text-sm' onClick={()=>Navigate("/login")}>Already have an account?</p>
        </div>
        </div>
    )
}
export default Signup