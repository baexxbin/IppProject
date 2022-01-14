"use strict";

class UserStorage {
    static #users = {
        id: ["xxubin", "qotqls", "배수빈"],
        psword: ["1234", "1234", "123456"],
        name: ["수빈", "배수빈", "배수"]

    };

    static getUsers(...fields) {
        const users= this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{})
        return;
    }

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) =>{
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

}

module.exports = UserStorage;