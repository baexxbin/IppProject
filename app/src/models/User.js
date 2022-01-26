"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    }

    async login(){
        const client = this.body;
        try{
            // const users = {id, business, managerNum, managerFax, managerEmail, manager} = await UserStorage.getUserInfo(client.id);

            const {id, psword,business, managerNum, managerFax, managerEmail, manager} = await UserStorage.getUserInfo(client.id);
            // console.log(id,psword,business, managerNum, managerFax, managerEmail, manager);
        
            if(id){
                if(id===client.id && psword === client.psword){
                    // console.log("확인");
                
                    return {
                        success: true,
                        id: id,
                        buyer: business,
                        call: managerNum,
                        fax: managerFax,
                        mail: managerEmail,
                        head: manager
                    };
                }
                return {success: false, msg: "비밀번호가 틀렸습니다."};
            }
            return {success: false, msg: "존재하지 않는 아이디입니다."};
        } catch(err){
            return {success: false, msg:err};
        }
        
    }

    async register(){
        const client = this.body;
        try{
           const response = await UserStorage.save(client);
           return response;
        } catch(err){
            return {success: false, msg:err };
        }
        
    }

    async info(){
        const client = this.body;
        try{
            const response = {id, psword, business, managerNum, managerFax, managerEmail, manager} = await UserStorage.getUserInfo(client.id);
            return response;
        } catch(err){
            return {success: false, msg:err };
        }
        
    }
}

module.exports = User;
