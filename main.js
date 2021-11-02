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
let vari;

let BSelect = document.getElementById("bulbasaur-select");
BSelect.addEventListener('click',BToggle);

let CSelect = document.getElementById("charmander-select");
CSelect.addEventListener('click',CToggle);

let SSelect = document.getElementById("squirtle-select");
SSelect.addEventListener('click',SToggle);

function BToggle() {
    if (bulbasaur.style.display === "none") {
        bulbasaur.style.display = "block";
        Bbtn.style.display = "inline";
    } else {
        bulbasaur.style.display = "none";
        Bbtn.style.display = "none";
    }
  }

function CToggle() {
    if (charmander.style.display === "none") {
        charmander.style.display = "block";
        Cbtn.style.display = "inline";
    } else {
        charmander.style.display = "none";
        Cbtn.style.display = "none";
    }
  }

function SToggle() {
    if (squirtle.style.display === "none") {
        squirtle.style.display = "block";
        Sbtn.style.display = "inline";
    } else {
        squirtle.style.display = "none";
        Sbtn.style.display = "none";
    }
  }

function autoToggle(){
    if(a==3) {a=1}
    
    if(a==1){ 
         vari = window.setInterval(function(){ 
        Bevolve(); Cevolve(); Sevolve();}, 1000);
        auto.innerHTML = "cancle";
    }
    
    if(a==2){
    window.clearInterval(vari) ;
    auto.innerHTML = "auto";
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

