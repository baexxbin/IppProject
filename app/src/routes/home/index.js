"use strict";


const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");
const app = require('../../../app');

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.get("/info", ctrl.output.info);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);
router.post("/info", ctrl.process.info);



module.exports = router;