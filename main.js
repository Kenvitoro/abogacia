const d = document;

/*#################MENU RESPONSIVO####################*/

const bars = d.querySelector(".bars");
const menu = d.querySelector(".menu")
const navX = d.querySelector(".fa-x")

bars.addEventListener("click", ()=>{
      menu.classList.add("nav-active") 
})

navX.addEventListener("click",()=>{
    menu.classList.remove("nav-active")
})

