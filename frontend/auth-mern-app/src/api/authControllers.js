import axiosInstance from "./axios"


export const signupUser = async({name,email,password})=>{
    
try {
    // console.log(import.meta.env.VITE_API_URL)

    const res = await axiosInstance.post("/signup",{
        name,
        email,
        password
    })

    if (res.status === 200) {
        return res.data
    } else {
        console.log(" Signup error",error)
    }
} catch (error) {
    console.log("error",error)
}

}