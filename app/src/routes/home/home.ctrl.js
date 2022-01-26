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
        res.redirect("home/register");
    },

    // 세션정보 res로 js에 넘겨주기
    info: (req,res) =>{
        console.log("info세션",req.session.user);
        const user = new User(req.session);
        // const response = user.info();
        res.render("home/info",{
            isDate : false,
            data : req.session
        });

        // return res.json(response);

        // 세션이용 정보출력
        // if(req.session.is_logined){
        //     console.log("is data");
        //     var status = req.session;
        //     res.render("home/info", {data : req.session});
        // }
        // res.render("home/info");
        // console.log(req.session.User);
    }

}


const process={
    login: async (req,res)=>{
        const user = new User(req.body);
        const response = await user.login();
        // console.log('응답: ', response);
        if(response.success === true){  // 세션정보로 저장
            req.session.is_logined = true;
            req.session.user = response.id;
            req.session.buyer = response.buyer;
            req.session.call = response.call;
            req.session.fax = response.fax;
            req.session.mail = response.mail;
            req.session.head = response.head;
            // res.render("home/info",{response});
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
        console.log("info POST",req.body);  // 날짜정보
        // console.log(response);
        console.log(req.session.user);
        console.log(req.body.isbtnOn);
        if(req.body.isbtnOn){
            console.log("들어옴");
            return res.json({
                success : true,
                data : req.session,
                dateData : req.body 
            })
            // res.render("home/info",{
            //     isDate : true,
            //     data : req.session,
            //     dateData : req.body
            // });
            // return res.json({
            //     success : true,
            // });
        }
        // return res.json({
        //     success : false,
        //     msg : "불러오기 실패",
        // })


        // return res.json(response);
    }
}

module.exports = {
    output,
    process,
}

// 브라우저에서 전달한 데이터를 가지고있는 유저
// 유저가 로그인 기능을 처리하고 어떤 응답을 받아서
// 이 응답을 컨트롤러가 res.json으로 처리 : json응답 전송