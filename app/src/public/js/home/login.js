"user strict";

 const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button")

loginBtn.addEventListener("click", login);

function login(){
    const req={     // 서버에게 전달할 데이터
        id : id.value,
        psword : psword.value,
    };

    fetch("/login", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())  // 서버에서 응답받은 데이터 받기
    .then((res) => {
        console.log(res.id);
        if(res.success){
            console.log("성공");
            location.href = "/info";
        }else{
            alert(res.msg);
        }
    })
    .catch((err) =>{
        console.log(res);
        console.error("로그인 중 에러 발생");
    });
}