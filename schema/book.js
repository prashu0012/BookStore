import mongoose from "mongoose";

const bookSchema=mongoose.Schema({
    "title":{type:String, required:true, unique:true},
    "description":{type:String, required:true},
    "author":{type:String, required:true},
    "genre":{type:String, required:true},
});

const book=mongoose.model('Book',bookSchema);
export default book;