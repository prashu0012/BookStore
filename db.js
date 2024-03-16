import mongoose from "mongoose";

const connect=async (url)=>{
    try{
        await mongoose.connect(url)
        console.log("Connected successfully!")
        return true;
    }catch(err){
        console.log("Failed to connect!")
        return false;
    }
}

export default connect;