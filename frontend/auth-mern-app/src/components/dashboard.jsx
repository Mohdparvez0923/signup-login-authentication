import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Dashboard=()=>{

    const [user,setUser] = useState("")
    const Navigate = useNavigate()
    const handleLogout =()=>{
        localStorage.clear()
        Navigate("/login")
    }

    useEffect(()=>{
        const storedUser = localStorage.getItem("user")
        if(storedUser){
            const parsedUser = JSON.parse(storedUser)
            setUser(parsedUser)
        }
    },[])

    return(
        <div className="p-2">
            <div class="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%] 
                        my-10 mx-auto box-border p-5
                        shadow-[0_0_10px_rgba(0,0,0,0.15)] 
                        font-sans flex flex-col items-center">

                <h1 className="text-lg ">Welcome! to your Dashboard</h1>
                <h1>Name : {user.name }</h1>
                <h1>Email : {user.email}</h1>
                <button className="bg-blue-400 my-2 hover:bg-blue-500 w-50 rounded-sm text-white hover:rounded-2xl transition-all duration-300" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}
export default Dashboard