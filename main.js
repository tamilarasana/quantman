function setMessaage(formElement, type ,message){
    const messageElement= formElement.querySelector(".form-message");
    messageElement.textContent=message;
    messageElement.classList.remove("form-message-error","form-message-success");
    messageElement.classList.add(`form-message-${type}`);
}

document.addEventListener('DOMContentLoaded',(e) =>{
    e.preventDefault()
    const login =document.querySelector("#login");
    const creatAccount = document.querySelector("#creatAccount");
    const forgotPassword = document.querySelector("#resetPassword");

    document.querySelector("#linkCreatAccount").addEventListener('click',(e)=>{
        e.preventDefault()
        login.classList.add("form-hidden");
        creatAccount.classList.remove("form-hidden");
        forgotPassword.classList.add("form-hidden");
    });

    document.querySelector("#linkLogin").addEventListener('click',(e)=>{
        e.preventDefault()
        login.classList.remove("form-hidden");
        creatAccount.classList.add("form-hidden");
        forgotPassword.classList.add("form-hidden");
    });

    document.querySelector("#linkForgotPassword").addEventListener('click',(e)=>{
        e.preventDefault()
        login.classList.add("form-hidden");
        creatAccount.classList.add("form-hidden");
        forgotPassword.classList.remove("form-hidden");
    });

    document.querySelector("#linkBackLogin").addEventListener('click',(e)=>{
        e.preventDefault()
        login.classList.remove("form-hidden");
        creatAccount.classList.add("form-hidden");
        forgotPassword.classList.add("form-hidden");

    });

    login.addEventListener("submit", e =>{
        e.preventDefault();
        setMessaage(login, "error", "Invalid user name/Password")
    })

    creatAccount.addEventListener("submit",e=>{
        e.preventDefault();
        setMessaage(creatAccount,"success","Success")
    })

    forgotPassword.addEventListener("submit",e =>{
        e.preventDefault();
        setMessaage(forgotPassword,"success","Success")
    })
}); 


