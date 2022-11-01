let input = document.querySelector("input[type=password]");
let btn = document.querySelector("button");
console.log(btn);


btn.onclick = function(){
    if (this.textContent === 'show password'){
        input.setAttribute('type', "text");
        this.textContent = "hide password";
    } else {
        input.setAttribute('type', "password");
        this.textContent = "show password";
    }
};
