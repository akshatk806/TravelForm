const mongoose=require('mongoose');
const formSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
});

const Form = mongoose.model('Form', formSchema);

module.exports=Form;