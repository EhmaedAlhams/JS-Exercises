let input = document.querySelector("input[type=password]");
let btn = document.querySelector("button");
// console.log(btn);


btn.onclick = function(){
    if (this.textContent === 'show password'){
        input.setAttribute('type', "text");
        this.textContent = "hide password";
    } else {
        input.setAttribute('type', "password");
        this.textContent = "show password";
    }
};

input.onkeyup = function () {
    document.querySelector("h1").textContent = this.value;
};

document.addEventListener('contextmenu', function (element) {
    // element.preventDefault();
});

// first method:

// function time(){
//     let now = new Date(),
//     hours = now.getHours(),
//     miniutes = now.getMinutes(),
//     seconds = now.getSeconds();
//
//     if (hours < 10 || miniutes < 10 || seconds < 10 ){
//         hours = '0' + hours;
//         miniutes = '0' + miniutes;
//         seconds = '0' + seconds;
//     }
//
//     document.querySelector('h2').textContent = hours + ":" + miniutes + ":" + seconds;
// }
//
// window.onload = function(){
//     setInterval(time, 500);
// };

// second method:
var myClock = setInterval(function () {
    var data = new Date().toDateString();
    var clock = new Date().toLocaleTimeString();

    document.querySelector('.clock').innerHTML = clock;
    document.querySelector('.data').innerHTML = data;
})

let textarea = document.querySelector('textarea');
let span = document.querySelector('span');

textarea.onkeyup = function () {
    span.textContent = 50 - this.value.length;
    // if(span.textContent < 0){
    //     span.style.color = "#F00"
    // } else {
    //     span.style.color = "#000";
    // }

    span.textContent < 0 ? span.style.color = "#F00" : span.style.color = "#000";
};


let second = 119;
let count = document.querySelector('.div');


let countDown = setInterval(() => {
    // secondPass();
}, 1000);

function secondPass() {
    let minutes = Math.floor(second / 60);

    let second = second % 60;
    // console.log(minutes);
};