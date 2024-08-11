import {passwordObject} from "../data/passwordObject.js"
let viewHTML;
console.log("hi")
passwordObject.forEach((password)=>{
viewHTML+=`<div class="row text-centre">
            <div class="card" style="width:400px">
                <div class="card-body">
                  <h5 class="card-title">${password.name}</h5>
                  <p class="card-text">${password.password}</p>
                </div>
            </div>
        </div>
        <br>`

})
document.querySelector(".container").innerHTML=viewHTML;