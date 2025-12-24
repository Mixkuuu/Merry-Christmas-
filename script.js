// ================= SALJU =================
const snowContainer = document.querySelector(".snow-container");

for (let i = 0; i < 40; i++) {
    const snow = document.createElement("div");
    snow.className = "snow";
    snow.innerHTML = "❄";
    snow.style.left = Math.random() * 100 + "vw";
    snow.style.animationDuration = (Math.random() * 5 + 5) + "s";
    snow.style.fontSize = (Math.random() * 10 + 10) + "px";
    snowContainer.appendChild(snow);
}

// ================= AMPL0P =================
function openEnvelope() {
    const envelope = document.getElementById("envelope");
    const letter = document.getElementById("letter");

    envelope.classList.add("open");

    setTimeout(() => {
        letter.style.display = "flex";
    }, 1200);
}

function closeLetter() {
    document.getElementById("letter").style.display = "none";
}
