import { passwordObject } from "../data/passwordObject.js";
    function isPassword(){
    let loginPermission=false;
    document.getElementById("confirm").addEventListener("click",()=>{
    let inputPassword=document.getElementById("inputPassword2").value;
    passwordObject.forEach((Password)=>{
        if(Password.password===inputPassword){
        loginPermission=true;
        }
    }
    )
    })
    return passwordObject;
}
console.log(isPassword())