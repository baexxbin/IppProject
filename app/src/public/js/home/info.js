"user strict";

const orderDate = document.getElementById("orderDate");
const dateTR = document.getElementById("dateTR");
const btn = document.querySelector("#button");
var cnt=0;

btn.addEventListener("click", load);

function load(){
    var today = new Date();
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);

    var dateString = year + '-' + month  + '-' + day;

    const req = {
        isbtnOn : true,
        date : dateString
    };

    fetch("/info",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
        console.log(res.dateData.date);
        console.log(res.data.user);
        console.log(res.data.buyer);
        console.log(res.success);

        if(cnt<1){
            var dateTD = document.createElement("td");
            dateTD.innerHTML = res.dateData.date;
            dateTR.appendChild(dateTD);
            cnt++;
        }
        
        console.log("정보불러오기 성공");
    })
    .catch((err) =>{
        console.error("정보불러오기 중 에러 발생",err);
    });
}