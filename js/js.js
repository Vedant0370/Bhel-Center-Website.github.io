
let menu = document.querySelector("#home-menubar");
let navbar = document.querySelector(".navbar");

menu.onclick = () =>{
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}

window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
}


// popup starts 

var popup1 = document.getElementById("home-popup")

function showPopup(){
    
    popup1.classList.add("homepop-up")
}

function removePopup(){
    popup1.classList.remove("homepop-up")
}

// popup ends