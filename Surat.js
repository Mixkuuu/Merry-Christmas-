const snow = document.getElementById("snow");

for(let i=0;i<60;i++){
    let s=document.createElement("span");
    s.style.left=Math.random()*100+"%";
    s.style.animationDuration=5+Math.random()*5+"s";
    snow.appendChild(s);
}

function openLetter(){
    document.getElementById("letter").classList.add("show");
}

window.onload = () => {
    document.getElementById("letter").classList.add("show");
};
