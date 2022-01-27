// "use strict";

const { response } = require("express");
const User = require("../../models/User");

const output = {
    home: (req,res)=>{
        res.render("home/index");
    },

    login: (req,res)=>{
        if(req.session.is_logined){
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
        console.log("info세션",req.session.user);
        // user.load함수 이용 시
        // const user = new User(req.session);
        // const response = user.info();
        res.render("home/info",{
            isDate : false,
            data : req.session
        });

        // 세션이용 정보출력
        // if(req.session.is_logined){
        //     console.log("is data");
        //     var status = req.session;
        //     res.render("home/info", {data : req.session});
        // }
        // res.render("home/info");
        // console.log(req.session.User);
    },

    logout : (req, res)=>{
        if(req.session.user){
            req.session.destroy();
            res.clearCookie('loginData');
            res.redirect("/login");
        }
    }

}


const process={
    login: async (req,res)=>{
        const user = new User(req.body);
        const response = await user.login();
        if(response.success === true){  // 세션정보로 저장
            req.session.is_logined = true;
            req.session.user = response.id;
            req.session.buyer = response.buyer;
            req.session.call = response.call;
            req.session.fax = response.fax;
            req.session.mail = response.mail;
            req.session.head = response.head;
            res.redirect("/info");
        }
    },

    register: async (req, res) =>{
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    },

    info: async (req,res)=>{
        const user = new User(req.session);
        const response = await user.info(); // 기본정보

        if(req.body.isbtnOn){
            return res.json({
                success : true,
                data : req.session,
                dateData : req.body 
            })
            
        }
    }
}

module.exports = {
    output,
    process,
}