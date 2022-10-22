// function setMessaage(formElement, type ,message){
//     const messageElement= formElement.querySelector(".form-message");
//     messageElement.textContent=message;
//     messageElement.classList.remove("form-message-error","form-message-success");
//     messageElement.classList.add(`form-message-${type}`);
// }

// document.addEventListener('DOMContentLoaded',(e) =>{
//     e.preventDefault()
//     const login =document.querySelector("#login");
//     const creatAccount = document.querySelector("#creatAccount");
//     const forgotPassword = document.querySelector("#resetPassword");

//     document.querySelector("#linkCreatAccount").addEventListener('click',(e)=>{
//         e.preventDefault()
//         login.classList.add("form-hidden");
//         creatAccount.classList.remove("form-hidden");
//         forgotPassword.classList.add("form-hidden");
//     });

//     document.querySelector("#linkLogin").addEventListener('click',(e)=>{
//         e.preventDefault()
//         login.classList.remove("form-hidden");
//         creatAccount.classList.add("form-hidden");
//         forgotPassword.classList.add("form-hidden");
//     });

//     document.querySelector("#linkForgotPassword").addEventListener('click',(e)=>{
//         e.preventDefault()
//         login.classList.add("form-hidden");
//         creatAccount.classList.add("form-hidden");
//         forgotPassword.classList.remove("form-hidden");
//     });

//     document.querySelector("#linkBackLogin").addEventListener('click',(e)=>{
//         e.preventDefault()
//         login.classList.remove("form-hidden");
//         creatAccount.classList.add("form-hidden");
//         forgotPassword.classList.add("form-hidden");

//     });

//     login.addEventListener("submit", e =>{
//         e.preventDefault();
//         setMessaage(login, "error", "Invalid user name/Password")
//     })

//     creatAccount.addEventListener("submit",e=>{
//         e.preventDefault();
//         setMessaage(creatAccount,"success","Success")
//     })

//     forgotPassword.addEventListener("submit",e =>{
//         e.preventDefault();
//         setMessaage(forgotPassword,"success","Success")
//     })
// }); 



//     const loginpage =document.querySelector(".login-section");

//     document.querySelector("#loginbutton").addEventListener('click',(e)=>{
//         e.preventDefault()
//         const loginpage =document.querySelector(".login-section");
//         loginpage.classList.add("active");


//     });


var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
  createmodal.style.display = "none";

}
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var createmodal = document.getElementById("createModal");
var crearebtn = document.getElementById("createBtn");
var createspan = document.getElementsByClassName("createclose")[0];

crearebtn.onclick = function() {
  createmodal.style.display = "block";
  resetModal.style.display = "none";
  modal.style.display = "none";

}
createspan.onclick = function() {
  createmodal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == createmodal) {
    createmodal.style.display = "none";
  }
}

var linkforgetPassword = document.getElementById("linkForgotPassword");
var resetModal = document.getElementById("resetPassword");
var resetclose = document.getElementsByClassName("resetclose")[0];

linkforgetPassword.onclick = function() {
  resetModal.style.display = "block";
  createmodal.style.display = "none";
  modal.style.display = "none";
}
resetclose.onclick = function() {
  resetModal.style.display = "none";
}

var backtologin = document.getElementById("linkBackLogin");

backtologin.onclick = function() {
  modal.style.display = "block";
  resetModal.style.display = "none";
}
var linkLogin = document.getElementById("linkLogin");

linkLogin.onclick = function() {
  modal.style.display = "block";
  createmodal.style.display = "none";
}



// const hide = document.getElementsByClassName("margin")
// hide.addEventListener('click', ()=>{
//     hide.style.display='none';
// });