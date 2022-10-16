let serialDiv = document.querySelector(".serial");
let btn = document.querySelector(".generate");


let characters = "1234567890abcdeABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^*";
let count = 10;


btn.onclick = function () {
    serial = "";
    for (let i = 0; i < count; i++){
        serial += characters[Math.floor(Math.random() * characters.length)];
    }
    serialDiv.innerHTML = serial;
}