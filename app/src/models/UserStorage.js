"use strict";

const fs = require("fs").promises;

class UserStorage {
    

    static getUsers(...fields) {
        // const users= this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{})
        return;
    }

    static getUserInfo(id){
        consol.log(fs.readFile("./src/databases/users.json"));
        
        // , (err,data)=>{
        //     if(err) throw err;
        //     const users = JSON.parse(data);
        //     const idx = users.id.indexOf(id);
        //     const usersKeys = Object.keys(users);
        //     const userInfo = usersKeys.reduce((newUser, info) =>{
        //         newUser[info] = users[info][idx];
        //         return newUser;
        //     }, {});

        //     return userInfo;
        // });
    }

}

module.exports = UserStorage;