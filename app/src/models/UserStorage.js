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

}

module.exports = UserStorage;