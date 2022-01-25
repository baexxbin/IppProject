// "use strict";

const { response } = require("express");
const User = require("../../models/User");

const output = {
    home: (req,res)=>{
        res.render("home/index");
    },

    login: (req,res)=>{
        if(req.session.is_logined){
            console.log("login세션있");
            res.redirect("/info");
            // res.render("home/info",{data : req.session});
        }else{
            res.render("home/login");
        }
    },

    register: (req,res) =>{
        res.render("home/register");
    },

    // 세션정보 res로 js에 넘겨주기
    info: (req,res) =>{
        console.log("데이터");
        if(req.session.is_logined){
            console.log("is data");
            var status = req.session;
            console.log('data상태',status);
            res.render("home/info", {data : req.session});
            console.log(data);
        }
        res.render("home/info");
    }

}


const process={
    login: async (req,res)=>{
        const user = new User(req.body);
        const response = await user.login();
        console.log('응답: ', response);
        if(response.success === true){  // 세션정보로 저장
            req.session.is_logined = true;
            req.session.user = response.id;
            req.session.buyer = response.buyer;
            req.session.call = response.call;
            req.session.fax = response.fax;
            req.session.mail = response.mail;
            req.session.head = response.head;
            res.render("home/info",{response});
            console.log("response", response);
        }
        // if(req.session.is_logined){
        //     res.render("home/info",{data:response});
        //     console.log("response", response);
        // }
        // return res.json(response);
    },

    register: async (req, res) =>{
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    },

    info: (req,res)=>{
        console.log(req.session)
    }
}

module.exports = {
    output,
    process,
}

// 브라우저에서 전달한 데이터를 가지고있는 유저
// 유저가 로그인 기능을 처리하고 어떤 응답을 받아서
// 이 응답을 컨트롤러가 res.json으로 처리 : json응답 전송