const chai = require('chai');
const chaiHttp = require('chai-http');
const { response } = require('express');
const app = require("../app");

chai.should();
chai.use(chaiHttp);

describe("api v1 post to rabbit", () => {
    describe("get /api/v1/", () =>{
        it('Should Return 404 ', (done) => {
            chai.request(app)
            .get('/api/v1/')
            .end((err, res) => {
                res.should.have.status(404);
                done();
            })
        });
    });

    describe("post /api/v1/post-to-rabbit", () => {
        it('Should post to rabbitMQ', (done) => {
            let params = {
                "message": "Hello ini dari unit testing"
            };

            chai.request(app)
            .post('/api/v1/post-to-rabbit')
            .send(params)
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
                done();
            })
        });
    });

});
