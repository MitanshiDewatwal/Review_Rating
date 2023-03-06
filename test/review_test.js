let server = require("../index");
let chaiHttp = require("chai-http");
var chai = require("chai");
const utils = require("../models/reviewModelSchema");
let routes = require("../routes/reviewRoutes")
chai.should();
chai.use(chaiHttp);

//1 test case for adding a review................................................
describe("POST/api/review", () => {
    it("test case for adding a review :", (done) => {
        const data = {
            enterYourReview: "Superb",
            rating: "2",
            company_id: "63d3a36f989e932fd0b325f1",
            user_id: "63c7e058e5066bc442ef978e"
        };
        chai
            .request(server)
            .post("/review/reviewadd")
            .send(data)
            .end((err, res) => {
                res.should.have.status(201);
                res.should.be.a("object");
                res.body.should.have.property("success").eq("success");
                res.body.should.have.property("message").eq("Thanku for your review.Your revivew added Successfully");
                done();
            })
    })
})

// 2 test case for editing a review................................................
describe("PATCH/api/review", () => {
    it("test case for editng a review :", (done) => {
        const data = {
            enterYourReview:"jyotasana",
            rating:"5",
            company_id:"63d3a36f989e932fd0b325f1",
            user_id:"63ce117d8c516b74b1783b4c"
        };
        chai
            .request(server)
            .patch("/review/changeReview/63dba2dbf53b00e8d43f5817")
            .send(data)
            .end((err, res) => {
                res.should.have.status(201);
                res.should.be.a("object");
                res.body.should.have.property("success").eq("success");
                res.body.should.have.property("message").eq("Thanku for your review.Your review edited successfully");
                done();
            })
    })
})

// 2 test case for deleting a review................................................
describe("DELETE/api/review", () => {
    it("test case for deleting a review :", (done) => {
        const data = {
           
        };
        chai
            .request(server)
            .delete("/review/deletedReview/63dba009f53b00e8d43f5806")
            .send(data)
            .end((err, res) => {
                res.should.have.status(201);
                res.should.be.a("object");
                res.body.should.have.property("success").eq("success");
                res.body.should.have.property("message").eq("Thank you your review deleted Successfully");
                done();
            })
    })
})
// 3 test case for showing  a review list ................................................
describe("GET/api/review", () => {
    it("test case for showing a review list :", (done) => {
        const data = {
           
        };
        chai
            .request(server)
            .get("/review/getList")
            .send(data)
            .end((err, res) => {
                res.should.have.status(201);
                res.should.be.a("object");
                res.body.should.have.property("success").eq("success");
                res.body.should.have.property("message").eq("Thanku your review list is shown here");
                done();
            })
    })
})
// 4 test case for sowing a detail of  a review................................................
describe("GET/api/review", () => {
    it("test case for showing a review detail:", (done) => {
        const data = {
           
        };
        chai
            .request(server)
            .get("/review/getDetail/63dba009f53b00e8d43f5806")
            .send(data)
            .end((err, res) => {
                res.should.have.status(201);
                res.should.be.a("object");
                res.body.should.have.property("success").eq("success");
                res.body.should.have.property("message").eq("Here is the detail of given review");
                done();
            })
    })
})
