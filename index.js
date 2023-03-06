require('./models/config')
const dotenv = require('dotenv')
const cron = require("node-cron");
const express = require('express')
const bodyparser = require('body-parser')
const { application } = require("express");
const router = require('./routes/mainRoutes')
dotenv.config()
const app = express();
app.use(express.json());
app.use(bodyparser.json());;
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.urlencoded({ extended: false }))
app.use("/", router)
const server = app.listen(process.env.PORT, function (req, res) {
    console.log(`server is running on port : ${process.env.PORT}`);
})

module.exports = server
