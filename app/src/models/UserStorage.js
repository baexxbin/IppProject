"use strict";

const db = require("../config/db");

class UserStorage {

    // db접근후 user정보 반환
    static getUserInfo(id){
        return new Promise((resolve, reject) =>{
            const query = "SELECT * FROM customer WHERE id = ?;";
            db.query(query, [id], (err, data)=>{
                if(err) reject(`${err}`);
                else resolve(data[0]);
            });
        });
    }

    static async save(userInfo){
        return new Promise((resolve, reject) =>{
            const query = "INSERT INTO customer(business, businessNum, rep, business_status, item, classify, area, address, repNum, repFax, nature, field, tax_manager, tax_managerNum, tax_managerFax, tax_managerEmail, manager, department, position, id, psword, managerNum, managerFax, managerEmail, delivery) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";

            db.query(query, [userInfo.business, userInfo.businessNum, userInfo.rep ,userInfo.business_status, userInfo.item, userInfo.classify, userInfo.area, userInfo.address, userInfo.repNum, userInfo.repFax, userInfo.nature, userInfo.field, userInfo.tax_manager, userInfo.tax_managerNum, userInfo.tax_managerFax, userInfo.tax_managerEmail,userInfo.manager, userInfo.department, userInfo.position, userInfo.id, userInfo.psword, userInfo.managerNum, userInfo.managerFax, userInfo.managerEmail, userInfo.delivery],
                (err)=>{
                if(err) reject(`${err}`);
                else resolve({success: true});
            });
        });
    }

    // static async load(){
        
    // }
}

module.exports = UserStorage;