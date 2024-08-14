import { passwordGenerator } from "../script/passwordGenerator.js";

let passwordObject=[JSON.parse(localStorage.getItem("password"))];
if(!passwordObject){
 passwordObject=[{name:"R Manoj Kumar",password:"1md%f$34g"},
    {name:"Sujith Kumar",password:"mf$h&z235"},
    {name:"Sudha",password:"k$ud82ha%"}
]
}
export function StorePassword(){
 localStorage.setItem("password",JSON.stringify(passwordObject)); 
}
export function addPassword(Name,Password){
   passwordObject.push({name:Name,password:Password})
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
   let inputName=document.getElementById("js-input-name").value;
   let inputNumber=Number(document.getElementById("js-input-number").value);
   if (!inputName && !inputNumber){
      alert("FILL THE INPUTS")
   }
   let password= passwordGenerator(inputNumber)
   addPassword(inputName,password);
   StorePassword();
}
 
let confirmElement=document.getElementById(".js-confirm");
let formElement=document.querySelector(".js-form-container")
formElement.innerHTML=`<form class="form-block js-form">
            <h3 class="h3">Generate your Password</h3><br>
            <input type="text" class="form-control " id=" js-input-name" placeholder="Name" wire:model.defer="name"/><br>
            <input type="text" class="form-control " id="js-input-number" placeholder="Type Number Of Inputs" wire:model.defer="name"/><br>
            <button class="btn btn-info" id="js-confirm">Generate Password</button>
            
        </form>`;
confirmElement.addEventListener("click",()=>{
   addPassword("kiran","password")
   StorePassword();
   formElement.innerHTML=`<form class="form-block js-form">
            <h3 class="h3">Generate your Password</h3><br>
            <input type="text" class="form-control " id=" js-input-name" placeholder="Name" wire:model.defer="name"/><br>
            <input type="text" class="form-control " id="js-input-number" placeholder="Type Number Of Inputs" wire:model.defer="name"/><br>
            <button class="btn btn-info" id="js-confirm">Generate Password</button>
            <h4 class="h4">Generated</h4>
        </form>`;
})

