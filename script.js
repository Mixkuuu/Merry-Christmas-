const snow = document.getElementById("snow");
const bell = document.getElementById("bell");

for(let i=0;i<60;i++){
    let s=document.createElement("span");
    s.style.left=Math.random()*100+"%";
    s.style.animationDuration=5+Math.random()*5+"s";
    snow.appendChild(s);
}

function openLetter(){
    document.getElementById("start").style.display="none";
    document.getElementById("letter").classList.add("show");
    bell.play();
}

setInterval(()=>{
    bell.currentTime=0;
    bell.play();
},20000);
