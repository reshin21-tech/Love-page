const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");
const message = document.getElementById("message");
const gif = document.getElementById("cat-gif");
const question = document.getElementById("question");
const card = document.getElementById("card");

let yesScale = 1;
let attempts = 0;

const teasing = [
    "You almost clicked it 👀",
    "That was close!",
    "Hmm suspicious...",
    "The Yes button looks better",
    "Why are you avoiding Yes?"
];

yesBtn.addEventListener("click", yesClicked);

/* No button escapes BEFORE click */
noBtn.addEventListener("mouseover", escapeNo);
noBtn.addEventListener("touchstart", escapeNo);

function escapeNo() {
    attempts++;

    const maxX = window.innerWidth - 120;
    const maxY = window.innerHeight - 80;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    yesScale += 0.2;
    yesBtn.style.transform = "scale(" + yesScale + ")";

    message.textContent =
        teasing[Math.floor(Math.random() * teasing.length)];

    if (attempts > 6) {
        message.textContent = "Okay okay... you clearly want to press Yes 😆";
    }
}

/* YES CLICKED */
function yesClicked() {
    question.textContent = "She said YES 💕";
    message.textContent = "This is the beginning of our story.";

    gif.src = "https://media.tenor.com/7xWSXqQ9Y7kAAAAj/cute-love.gif";

    noBtn.style.display = "none";

    card.style.transform = "scale(1.1)";
    card.style.transition = "0.4s";

    for (let i = 0; i < 40; i++) {
        createHeart();
    }
}

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = ["💖","💕","💗","💘","💞"][Math.floor(Math.random()*5)];

    heart.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}