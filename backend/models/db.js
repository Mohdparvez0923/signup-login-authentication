import mongoose from "mongoose";
import 'dotenv/config'
function DBConnection(){
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log("DB connection successfully..")
    } catch (error) {
        console.log("db connection error",error)
    }
}
export default DBConnection;