"use strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv"); 

const app = express();
dotenv.config();

const PORT = 3000;

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set('views', './src/views');
app.set('view engine', 'ejs');


// 미들웨어 등록
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/", home);


module.exports = app;