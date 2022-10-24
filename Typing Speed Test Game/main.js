/*
    Advices
    - Always Check The Console
    - Take Your Time To Name The Identifiers
    - DRY

    Steps To Create The Project
    [01] Create HTML Markup
    [02] Add Styling And Separate From Logic
    [03] Create The App Logic
    ---- [01] Add Levels
    ---- [02] Show Level And Seconds
    ---- [03] Add Array Of Words
    ---- [04] ِAdd Start Game Button
    ---- [05] Generate Upcoming Words
    ---- [06] Disable Copy Word And Paste Event + Focus On Input
    ---- [07] Start Play Function
    ---- [08] Start The Time And Count Score
    ---- [09] Add The Error And Success Messages
    [04] Your Trainings To Add Features
    ---- [01] Save Score To Local Storage With Date
    ---- [02] Choose Levels From Select Box
    ---- [03] Break The Logic To More Functions
    ---- [04] Choose Array Of Words For Every Level
    ---- [05] Write Game Instruction With Dynamic Values
    ---- [06] Add 3 Seconds For The First Word
*/

// Array Of Words
const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing",
];

// Setting Levels
const lvls = {
    Easy: 5,
    Normal: 3,
    Hard: 2,
};

// if (lvls.Easy) { 

// };

// Default Level

let defaultLevel = "Normal";
let defaultTime = lvls[defaultLevel];

// Catch Selectors

let btn = document.querySelector('.start');
let defaultName = document.querySelector('.message .lvl');
let defaultTiming = document.querySelector('.message .seconds');
let word = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");

// Setting Level Name + Seconds + Score

defaultName.innerHTML = defaultLevel;
defaultTiming.innerHTML = defaultTime;
timeLeftSpan.innerHTML = defaultTime;
scoreTotal.innerHTML = words.length;

// Disable Paste Event
input.onpaste = function () { 
    return false;
};

btn.onclick = function () { 
    this.remove();
    input.focus();
    generateWord();
};

function generateWord() { 
    let randomWord = words[Math.floor(Math.random() * words.length)];
    let indexWord = words.indexOf(randomWord);
    words.splice(indexWord, 1);
    word.innerHTML = randomWord;
    upcomingWords.innerHTML = "";

    for (let i = 0; i < words.length; i++){
        let div = document.createElement('div');
        let txt = document.createTextNode(words[i]);
        
        div.appendChild(txt);
        upcomingWords.appendChild(div);
    }

    // Call Start Play Function
    CallPlay();
};

function CallPlay() {

    timeLeftSpan.innerHTML = defaultTime;

    let play = setInterval(() => {
        timeLeftSpan.innerHTML--;
        if (timeLeftSpan.innerHTML == 0) {
            clearInterval(play);

            if (word.innerHTML.toLowerCase() === input.value.toLowerCase()) {
                input.value = "";
                scoreGot.innerHTML++;

                if (words.length > 0) {
                    generateWord();

                } else {
                    let span = document.createElement('span');
                    span.className = "good";
                    let txt = document.createTextNode("Configuration");
                    span.appendChild(txt);
                    finishMessage.appendChild(span);
                }

            } else {
                let span = document.createElement('span');
                span.style.backgroundColor = "#f44336"
                span.style.color = "whitesmoke";
                span.style.display = "flex";
                span.style.justifyContent = "center";
                span.className = "bad";
                let txt = document.createTextNode("Game Over");
                span.appendChild(txt);
                finishMessage.appendChild(span);
            };
        };

    }, 1000);
}


// let check = document.querySelector('input[type="checkbox"]').onclick = function () { 
//     console.log("ok");
// };