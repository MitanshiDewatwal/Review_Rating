let server = require("../index");
let chaiHttp = require ("chai-http");
var chai = require ("chai");
const utils = require ("../models/userModelSchema");
let routes = require ("../routes/userRouters")
chai.should();
chai.use(chaiHttp);

//1 api test case
describe ("POST/api/user",()=>{
    it ("It  should return login user detal :",(done)=>{
        const data ={
            userEmail : "mitanshidewatwal506@gmail.com",
            password : "abcdABCDE123456@#$",
       };
       chai
       .request(server)
       .post("/user/login")
       .send(data)
       .end((err,res) =>{
        res.should.have.status(200);
        res.should.be.a("object");
        res.body.should.have.property("success").eq("success");
        res.body.should.have.property("message").eq("Login Success");
        res.body.should.have.property("token");
        done();
       })
    })
})
it ("It  should return error message:",(done)=>{
    const data ={
       userEmail : "mitanshidewatwal@gmail.com",
        password : "abcdABCDE123456@#$"
   };
   chai
   .request(server)
   .post("/user/login")
   .send(data)
   .end((err,res) =>{
    res.should.have.status(400);
    res.body.should.have.property("success").eq("failure");
    res.body.should.have.property("message").eq("Email or Password is not valid");
    
    done();
   })
})
it ("It  should return Email or Password Error Message:",(done)=>{
    const data ={
       userEmail : "mitanshidewatwal506@gmail.com",
        password : "abcdABCDE123"
   };
   chai
   .request(server)
   .post("/user/login")
   .send(data)
   .end((err,res) =>{
    res.should.have.status(400);
    res.body.should.have.property("success").eq("failure");
    res.body.should.have.property("message").eq("Email or Password is not valid");
    
    done();
   })
})

//signUp test case API..................................................................
describe ("POST/api/user",()=>{
    it ("Test case for signUp API:",(done)=>{
        const data ={
            userName:"anita",
            userEmail:"nikkkidewatwalll@gmail.com",
            password : "123456789@#$abcdABCDE",
            city :"dewas",
            state: "dewas",
            phone_no: "3299765567"
       };
       chai
       .request(server)
       .post("/user/register")
       .send(data)
       .end((err,res) =>{
        res.should.have.status(201);
        res.should.be.a("object");
        res.body.should.have.property("success").eq("success");
        res.body.should.have.property("message").eq("The user register successfully");
        done();
       })
    })
})

describe ("POST/api/user",()=>{
    it ("Test case for  error in signUp API:",(done)=>{
        const data ={
            userName:"anita",
            userEmail:"nikkkidewatwalll@gmail.com",
            password : "123456789@#$abcdABCDE",
            city :"dewas",
            state: "dewas",
            phone_no: "3299765567"
       };
       chai
       .request(server)
       .post("/user/register")
       .send(data)
       .end((err,res) =>{
        res.should.have.status(409);
        res.should.be.a("object");
        res.body.should.have.property("success").eq("failure");
        res.body.should.have.property("message").eq("Email already exists ");
        done();
       })
    })
})

//test case for reset password email.....................
describe ("POST/api/user",()=>{
    it ("Test case for resetPassword email API:",(done)=>{
        const data ={
           
            userEmail:"mitanshidewatwal@gmail.com"
       };
       chai
       .request(server)
       .post("/user/resetPasswordEmail")
       .send(data)
       .end((err,res) =>{
        res.should.have.status(201);
        res.should.be.a("object");
        res.body.should.have.property("success").eq("success");
        res.body.should.have.property("message").eq("Email send to user successfully");
        done();
       })
    })
})

//test case for reset password email.....................
describe ("POST/api/user",()=>{
    it ("Test case for  error in resetPassword email API:",(done)=>{
        const data ={
           
            userEmail:"mitanshidew@gmail.com"
       };
       chai
       .request(server)
       .post("/user/resetPasswordEmail")
       .send(data)
       .end((err,res) =>{
        res.should.have.status(403);
        res.should.be.a("object");
        res.body.should.have.property("success").eq("failure");
        res.body.should.have.property("message").eq("Email user is not found");
        done();
       })
    })
})

//test case for reset password .....................
describe ("POST/api/user",()=>{
    it ("Test case for  resetPassword  API:",(done)=>{
        const data ={
            newPassword: "abc12345",
            confirmPassword: "abc12345"
       };
       chai
       .request(server)
       .post("/user/resetPassword/63cf6ad9704f52a8f3978724/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2NmNmFkOTcwNGY1MmE4ZjM5Nzg3MjQiLCJpYXQiOjE2Nzc5MzkxMjYsImV4cCI6MTY3ODM3MTEyNn0._2Yj4p7hL7bAiZcm6zzx_BXqvXBlNCyZAvnozbWHMqQ")
       .send(data)
       .end((err,res) =>{
        res.should.have.status(200);
        res.should.be.a("object");
        res.body.should.have.property("success").eq("success");
        res.body.should.have.property("message").eq("password successfully update");
        done();
       })
    })
})

//test case for reset password .....................
describe ("POST/api/user",()=>{
    it ("Test case for error in  resetPassword  API:",(done)=>{
        const data ={
            newPassword: "abc12345",
            confirmPassword: "abc1234"
       };
       chai
       .request(server)
       .post("/user/resetPassword/63cf6ad9704f52a8f3978724/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2NmNmFkOTcwNGY1MmE4ZjM5Nzg3MjQiLCJpYXQiOjE2Nzc5MzkxMjYsImV4cCI6MTY3ODM3MTEyNn0._2Yj4p7hL7bAiZcm6zzx_BXqvXBlNCyZAvnozbWHMqQ")
       .send(data)
       .end((err,res) =>{
        res.should.have.status(403);
        res.should.be.a("object");
        res.body.should.have.property("success").eq("failure");
        res.body.should.have.property("message").eq("password and Confirmpassword is not match");
        done();
       })
    })
})



