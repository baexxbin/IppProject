"use strict";

// 모듈

const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require('express-session');
const FileStore = require('session-file-store')(session);
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
app.use(cookieParser());
app.use(session({
    key: "loginData",
    secret: "secret",
    resave: "false",
    saveUninitialized: "true",
    store: new FileStore(),
    cookie: {expires: 60*60*24,},
}))

// index.js읽기
app.use("/", home);


module.exports = app;