const addButt = document.querySelector(".add-butt")
const overlay = document.querySelector(".overlay")
const closeButt = document.querySelector(".close")
const addCont = document.querySelector(".add-link-cont")


addButt.addEventListener("click", ()=>{
    overlay.style.display = "flex"
    addCont.classList.add("scale-up")
    
})

closeButt.addEventListener("click", ()=>{
    overlay.style.display = "none"
    addCont.classList.remove("scale-up")
})

// overlay.addEventListener("click", ()=>{
//     overlay.style.display = "none"
//     addCont.classList.remove("scale-up")
// })

