let server = require("../index");
let chaiHttp = require("chai-http");
var chai = require("chai");
const utils = require("../models/compModelSchema.js");
let routes = require("../routes/companyRoutes.js")
chai.should();
chai.use(chaiHttp);

//1 test case for adding a company................................................
describe("POST/api/company", () => {
    it("test case for adding a company :", (done) => {
        const data = {
            companyName: "softwaree divergentt",
            location: "khajarana chaurah",
            city: "indore",
            foundedOn: "2002/08/29",
            usersId: "63cf6ad9704f52a8f3978724"
        };
        chai
            .request(server)
            .post("/company/companyadd")
            .send(data)
            .end((err, res) => {
                res.should.have.status(201);
                res.should.be.a("object");
                res.body.should.have.property("success").eq("success");
                res.body.should.have.property("message").eq("company added Successfully");
                done();
            })
    })
})

describe("POST/api/company", () => {
    it("test case for  comapny already exists:", (done) => {
        const data = {
            companyName: "software",
            location: "khajarana chaurah",
            city: "indore",
            foundedOn: "2002/08/29",
            usersId: "63cf6ad9704f52a8f3978724"
        };
        chai
            .request(server)
            .post("/company/companyadd")
            .send(data)
            .end((err, res) => {
                res.should.have.status(409);
                res.should.be.a("object");
                res.body.should.have.property("success").eq("failure");
                res.body.should.have.property("message").eq(" company already exists");
                done();
            })
    })
})

//2 test case for get a company detail................................................
describe("GET/api/company", () => {
    it("test case for getting a comapny detail list :", (done) => {
        const data = {

        };
        chai
            .request(server)
            .get("/company/getCompany")
            .send(data)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a("object");
                res.body.should.have.property("success").eq("success");
                res.body.should.have.property("message").eq("Company list are displayed");
                done();
            })
    })
})

// 3) test case for Searching Details of comapny by city name.........................
describe("GET/api/company", () => {
    it("test case for getting a comapny detail list by city nane:", (done) => {
        const data = {
            city: "Indore"
        };
        chai
            .request(server)
            .get("/company/search")
            .send(data)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a("object");
                res.body.should.have.property("success").eq("success");
                res.body.should.have.property("message").eq("Here is the search comapny by city name");
                done();
            })
    })
})

//Searching Details of comapny and review.........................
describe("GET/api/company", () => {
    it("test case for Searching Details of comapny and review", (done) => {
        const data = {
        
        };
        chai
            .request(server)
            .get("/company/searched/63d56119c5ebdb0b344629a6")
            .send(data)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a("object");
                res.body.should.have.property("success").eq("success");
                res.body.should.have.property("message").eq("Here is the detail of company and review");
                done();
            })
    })
})

