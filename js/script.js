//seleciona os elementos 

const btnLogin = document.getElementById("btnLogin")
const overlay = document.getElementById("overlay")

//Abrir o Login
btnLogin.addEventListener("click", function(e){e.preventDefault(); 
    overlay.classList.add("active");
        document.body.style.overflow = "hidden";});

//fechar o login
overlay.addEventListener("click", function(e){
    if(e.target === overlay){
        overlay.classList.remove("active");
        document.body.style.overflow = "auto";
    }
})

document.getElementById("btnVoltar").addEventListener("click", function(){
    window.location.href = "index.html";
});