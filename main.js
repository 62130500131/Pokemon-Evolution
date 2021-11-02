const BphotoArray = ["assets/001.png","assets/002.png","assets/003.png"];
let bulbasaur = document.getElementById("bulbasaur");
let Bbtn = document.getElementById("bulbasaurbtn");
let Bcurrent = 1;
Bbtn.addEventListener("click", Bevolve);

const CphotoArray = ["assets/004.png","assets/005.png","assets/006.png"];
let charmander = document.getElementById("charmander");
let Cbtn = document.getElementById("charmanderbtn");
let Ccurrent = 1;
Cbtn.addEventListener("click", Cevolve);

const SphotoArray = ["assets/007.png","assets/008.png","assets/009.png"];
let squirtle = document.getElementById("squirtle");
let Sbtn = document.getElementById("squirtlebtn");
let Scurrent = 1;
Sbtn.addEventListener("click", Sevolve);
let a = 1;
let auto = document.getElementById("auto");
auto.addEventListener('click', autoToggle);
let vari



function autoToggle(){
    if(a==3) {a=1}
    if(a==1){ 
         vari = window.setInterval(function(){ 
            Bevolve(); Cevolve(); Sevolve();}, 1000);
    }
    
    if(a==2){
    window.clearInterval(vari) ;
    }
    a++
     
}
function Bevolve (){
    
    if(Bcurrent>2){
        Bcurrent = 0;
    }
    bulbasaur.innerHTML = "<img src='"+BphotoArray[Bcurrent]+"'>";
    Bcurrent++;
}

function Cevolve (){
    
    if(Ccurrent>2){
        Ccurrent = 0;
    }
    charmander.innerHTML = "<img src='"+CphotoArray[Ccurrent]+"'>";
    Ccurrent++;
}

function Sevolve (){
    
    if(Scurrent>2){
        Scurrent = 0;
    }
    squirtle.innerHTML = "<img src='"+SphotoArray[Scurrent]+"'>";
    Scurrent++;
}

