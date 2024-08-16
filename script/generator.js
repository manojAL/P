 import { addPassword } from "../data/passwordObject.js";
 import { StorePassword } from "../data/passwordObject.js";
 
 export function passwordGenerator(length) {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const allChars = uppercase + lowercase + numbers + specialChars;
    if (length <= 0) {
         alert('Password length must be greater than 0');
    }

    // Generate a random password
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    return password;
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

 let formElement=document.querySelector(".js-form-container")
 formElement.innerHTML=`<form class="form-block js-form">
             <h3 class="h3">Generate your Password</h3><br>
             <input type="text" class="form-control " id=" js-input-name" placeholder="Name" wire:model.defer="name"/><br>
             <input type="text" class="form-control " id="js-input-number" placeholder="Type Number Of Inputs" wire:model.defer="name"/><br>
             <button class="btn btn-info" id="js-confirm">Generate Password</button>
             
         </form>`;
 let confirmElement=document.getElementById("js-confirm");
 if(confirmElement){     
 confirmElement.addEventListener("click",function(){
  
    formElement.innerHTML=`<form class="form-block js-form">
             <h3 class="h3">Generate your Password</h3><br>
             <input type="text" class="form-control " id=" js-input-name" placeholder="Name" wire:model.defer="name"/><br>
             <input type="text" class="form-control " id="js-input-number" placeholder="Type Number Of Inputs" wire:model.defer="name"/><br>
             <button class="btn btn-info" id="js-confirm">Generate Password</button>
             <h4 class="h4"> Password: ${ generatePassword()}</h4>
         </form>`;
 })}
 else{
    alert("this element is not valid")
 }
 

