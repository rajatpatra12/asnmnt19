var express=require("express");

var bodyparser=require("body-parser");

var app=express();;

app.set('view engine','ejs');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.get('',function(req,res){
    res.render("../Home");
});

app.get('/Login',function(req,res){
    res.render('../Login');
});

app.get('/Signup',function(req,res){
    res.render('../Signup')
});

app.post('/login-details',function(req,res){
    var uname=req.body.uname;
    var upwd=req.body.upwd;
    
    if(uname==arr[0].uname && upwd==arr[0].upwd){
        res.send("<h1>Login Successful......<h1>");
    }else{
        res.send("<h1>Login Failed......plz try with valid username and password used while signup...");
    }
})
var arr=[];
app.post('/signup-details',function(req,res){
    var uname=req.body.uname;
    var upwd=req.body.upwd;
    var email=req.body.email;
    var obj={uname:uname,upwd:upwd,email:email}
    arr.push(obj);
    res.end("<h1>Data stored successfully<h1>");
})

app.listen(8080,function(){
    console.log("server listing at 8080")
})