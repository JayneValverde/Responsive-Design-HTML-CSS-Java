// -- navbar --
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}


window.onscroll = () =>{
  navbar.classList.remove('active');
}

document.getElementById("workBtn").onclick = function () {
  location.hash="#projects";
}