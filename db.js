import mongoose from "mongoose";

const Connect=async (url)=>{
    try{
        await mongoose.connect(url);
        console.log('connected..');
        return true;
    }catch(error){
        console.log('Failed Error-',error);
        return false;
    }
}
export default Connect;