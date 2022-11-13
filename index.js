const express=require('express');
const port=8000;
const path=require('path');

const db=require('./config/mongoose.js');
const Form=require('./models/form.js');

const app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

app.get('/',(request,response)=>{
    Form.find({},(err,forms)=>{
        if(err){
            console.log("Error in fethcing details from DB");
            return;
        }
        return response.render('home',{
            title:"GGSIPU Travel Form"
        })
    })
})

app.post('/form-submit',(request,response)=>{
    Form.create({
        name:request.body.name,
        age:request.body.age,
        email:request.body.email,
        phone:request.body.phone,
        address:request.body.address
    },(err,newForm)=>{
        if(err){
            console.log("Error in submitting details!");
            return;
        }
        console.log('**********',newForm);
        return response.redirect('/')
    })
})


app.listen(port,(err)=>{
    if(err){
        console.log("The Server is not up because of Error:",err);
        return;
    }
    console.log("The Express Server is up and running on port:",port);
})