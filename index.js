const liner = document.querySelector('.liner');
const headerRight = document.querySelector('.header-right');
const headerRighter = document.querySelector('.header-right a');

liner.addEventListener("click", ()=>{
    headerRight.classList.toggle("open");
})

navigator.getBattery().then(function(battery){
    
    level();
    function level(){
        var level=battery.level*100+"%";
        document.getElementById("level").innerHTML=level;

    }
});

