let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let highScore = 0;

let btns = ["red","yellow","green","purple"];
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function() {
    if(started == false) {
        console.log("game is started.");
        started = true;

       levelup();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}

function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * btns.length);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}

function checkAns(idx) {
    // console.log("current level :",level);

   if(userSeq[idx] === gameSeq[idx]) {
    if(userSeq.length == gameSeq.length) {
        setTimeout(levelup,1000);
    }
    console.log("same value");
   } else {
    let score = level - 1;
    if(score > highScore) {
        highScore = score;
    }
    h2.innerHTML = `Game Over! Your score was <b>${score}</b>, High Score: ${highScore} <br> Press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function() {
        document.querySelector("body").style.backgroundColor = "white";
    },150);
    reset();
   }
} 
function btnPress() {
    gameFlash(this);
    userColor = this.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns) {
    btn.addEventListener("click",btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

