import { passwordGenerator } from "../script/passwordGenerator.js";
export let passwordObject=[{name:"R Manoj Kumar",password:"1md%f$34g"},
    {name:"Sujith Kumar",password:"mf$h&z235"},
    {name:"Sudha",password:"k$ud82ha%"}
];
export function StorePassword(){
 passwordObject.forEach((password)=>{
    localStorage.setItem("password",JSON.stringify(password));
 })   
}
export function addPassword(name,password){
   passwordObject.push({name:name,password:password})
}

export function removePassword(Password){
let matchingPassword;
passwordObject.forEach((password)=>{
   if(Password===passwordObject.password){
       matchingPassword=password;
   }
   passwordObject.remove(matchingPassword);

})
}

export function generatePassword(){
   const inputName=(document.getElementById("js-input-name")).value;
   const inputNumber=Number((document.getElementById("js-input-number").value));
   password= passwordGenerator(inputNumber)
   addPassword(inputName,password);
   StorePassword();
}
 
let confirmElement=document.getElementById("js-confirm")
confirmElement.addEventListener("onclick",()=>{
generatePassword();
})