const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");

const toggler = document.querySelector('.toggler')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
// const container1 = document.querySelector('.container1')
const main = document.querySelector('.main')

const showFull = () => {
    toggler.addEventListener('click', ()=> {
        toggler.classList.toggle('active')
        sidebar.classList.toggle('active')
        main.classList.toggle('active')
        container.classList.toggle('active')
        //  container1.classList.toggle('active')
    })
}
 
showFull()

toggle.onclick = () => {
  menu.classList.toggle("active");
  close.classList.toggle("active");
};

// toggle.onclick()


function login() {
   //? let user = document.getElementById("usuario").value;
   //? let pass = document.getElementById("clave").value;
   event.preventDefault();  // Evitar el comportamiento predeterminado del formulario

   var user, pass;
   pass = document.getElementById("clave").value;
   user = document.getElementById("usuario").value;
  
   
   if (user == "David" && pass == "1234") {
        window.location.href = "home.html";
    } 
    else {
        alert("Usuario o contraseña incorrectos");
    }
}

document.getElementById("index.html").addEventListener("submit", login);



// const toggle = document.querySelector(".toggle");
// const menu = document.querySelector(".menu");

// toggle.onclick = () => {
//   menu.classList.toggle("active");
// };

