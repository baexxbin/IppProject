"use strict";

const User = require("../../models/User")

const output = {
    home: (req,res)=>{
        res.render("home/index");
    },

    login: (req,res)=>{
        res.render("home/login");
    },

    register: (req,res) =>{
        res.render("home/register")
    }

}



const process={
    login: async (req,res)=>{
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },

    register: async (req, res) =>{
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    }
}

module.exports = {
    output,
    process,
}

// 브라우저에서 전달한 데이터를 가지고있는 유저
// 유저가 로그인 기능을 처리하고 어떤 응답을 받아서
// 이 응답을 컨트롤러가 res.json으로 처리 : json응답 전송