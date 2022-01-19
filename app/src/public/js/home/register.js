"user strict";

 const business = document.querySelector("#business"),
    businessNum = document.querySelector("#businessNum"),
    rep = document.querySelector("#rep"),
    business_status = document.querySelector("#business-status"),
    item = document.querySelector("#item"),
    classify = document.querySelector("#classify"),
    area = document.querySelector("#area"),
    address = document.querySelector("#address"),
    repNum = document.querySelector("#repNum"),
    repFax = document.querySelector("#repFax"),
    nature = document.querySelector("#nature"),
    field = document.querySelector("#field"),
    taxManager = document.querySelector("#tax-manager"),
    taxManagerNum = document.querySelector("#tax-managerNum"),
    taxManagerFax = document.querySelector("#tax-managerFax"),
    taxManagerEmail = document.querySelector("#tax-managerEmail"),
    
    manager = document.querySelector("#manager"),
    department = document.querySelector("#department"),
    position = document.querySelector("#position"),
    id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    managerNum = document.querySelector("#managerNum"),
    managerFax = document.querySelector("#managerFax"),
    managerEmail = document.querySelector("#managerEmail"),
    delivery = document.querySelector("#delivery"),

    registerBtn = document.querySelector("#button")

registerBtn.addEventListener("click", register);

function register(){
    if(!id.value) return alert("아이디를 입력해주세요");
    if(psword.value !== confirmPsword.value) return alert("비밀번호가 일치하지 않습니다.");
    
    const req={
        business: business.value,
        businessNum : businessNum.value,
        rep: rep.value,
        business_status: business_status.value,
        item : item.value,
        classify : classify.value,
        area : area.value,
        address : address.value,
        repNum : repNum.value,
        repFax : repFax.value,
        nature : nature.value,
        field : field.value,
        taxManager : taxManager.value,
        taxManagerNum : taxManagerNum.value,
        taxManagerFax : taxManagerFax.value,
        taxManagerEmail : taxManagerEmail.value,
        manager : manager.value,
        department : department.value,
        position : position.value,
        id : id.value,
        psword : psword.value,
        confirmPsword : confirmPsword.value,
        managerNum : managerNum.value,
        managerFax : managerFax.value,
        managerEmail : managerEmail.value,
        delivery : delivery.value,
    };


    // 서버에게 데이터 전달
    fetch("/register", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            alert("회원가입 완료!");
            location.href = "/login";
        }else{
            if(res.err) return alert(res.err);
            alert(res.msg);
        }
    })
    .catch((err) =>{
        console.error("회원가입 중 에러 발생");
    });
}
