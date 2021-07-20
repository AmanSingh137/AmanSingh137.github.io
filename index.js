
const liner = document.querySelector('.liner');
const headerRight = document.querySelector('.header-right');
const headerRighter = document.querySelector('.header-right a');

liner.addEventListener("click", ()=>{
    headerRight.classList.toggle("open");
})