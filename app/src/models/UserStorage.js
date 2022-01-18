"use strict";

const db = require("../config/db");

class UserStorage {

    // db접근후 user정보 반환
    static getUserInfo(id){
        return new Promise((resolve, reject) =>{
            const query = "SELECT * FROM users WHERE id = ?;";
            db.query(query, [id], (err, data)=>{
                if(err) reject(err);
                resolve(data[0]);
            });
        });
    }

}

module.exports = UserStorage;