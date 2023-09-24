const hamburger = document.querySelector(".hamburgerWrapper");
const navigationMenu = document.querySelector(".navigationMenu");
hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navigationMenu.classList.toggle("active");
})
document.querySelectorAll(".menuItem").forEach(n=>n.addEventListener("click",()=>{
    navigationMenu.classList.toggle("active");
    hamburger.classList.toggle("active");

}))