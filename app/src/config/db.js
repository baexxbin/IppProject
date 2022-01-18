const mysql = require("mysql");
const { process } = require("../routes/home/home.ctrl");
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PSWORD,
    database: process.env.DB_DATABASE, 
});

db.connect();

module.exports = db;