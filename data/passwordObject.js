
export let passwordObject=[JSON.parse(localStorage.getItem("password"))];
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


