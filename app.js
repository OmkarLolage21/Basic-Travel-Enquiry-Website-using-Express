const express = require("express");
const fs=require("fs");
const path = require("path");
const app = express();
const port=80;

app.use('/static',express.static('static'));
app.use(express.urlencoded());
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'))

app.get("/",(req,res)=>{
    const con = "This is the best webpage and find it more interesting and explore it to get the most out of it";
    const params= {'title':'This is the best webpage',"content": con};
    res.status(200).render("index.pug",params);
});

app.post("/",(req,res)=>{
    names = req.body.name;
    age=req.body.age;
    mobile=req.body.mobile;
    email=req.body.email;
    address=req.body.address;
    query=req.body.query;
    let opMsg=`Name of the person is ${names}, age: ${age}, contact and email are ${mobile},${email}. Address of the person is ${address}. Queries are ${query}`;
    fs.writeFileSync('output.txt',opMsg);
    const params= {'message': 'Your form has been successfully submitted, Thank You !!!'};
    res.status(200).render("index.pug",params);
});

app.listen(port,()=>{
    console.log(`The application started successfully at ${port}`);
});