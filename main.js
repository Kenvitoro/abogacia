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



/*################# FORMULARIO ####################*/

const $form= d.querySelector(".form");

d.addEventListener("submit",(e)=>{
    e.preventDefault();
    


   const $loader= d.querySelector(".contact-form-loader");
   const $response= d.querySelector(".contact-form-response");
    
   $loader.classList.remove("none");


   
   fetch("https://formsubmit.co/ajax/Noemg09@gmail.com",{
    method:"POST",
    body: new FormData(e.target)
   })
   .then(res=>res.ok?res.json(): Promise.reject(res))
   .then(json=>{
    console.log(json)
    $loader.classList.add("none");
    $response.classList.remove("none");
    $form.reset();
   })
   .catch(err=>{
   let message = err.statusText || "Ocurrio un error al enviar, intente nuevamente mas tarde"

   $response.textContent= message
   })

   .finally(()=>{
    setTimeout(()=>{
    $response.classList.add("none");
    },6000)
   })

})
