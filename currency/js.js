let btn = document.querySelector('.btn');
let input = document.querySelector('.box .input');
let egp = document.querySelector('.egp span');
let sar = document.querySelector('.sar span');
let ils = document.querySelector('.ils span');
let jod = document.querySelector('.jod span');
let inr = document.querySelector('.inr span');

btn.onclick = function () {

    console.log(input);
    fetch("https://api.currencyfreaks.com/latest?apikey=c41316bce9a54810a6f6325432f227bd")
        .then((result) => {
            let data = result.json();
            return data;
        }).then((currency) => {
            egp.innerText = Math.round(input.value * currency.rates["EGP"]);
            sar.innerText = Math.round(input.value * currency.rates["SAR"]);
            ils.innerText = Math.round(input.value * currency.rates["ILS"]);
            jod.innerText = Math.round(input.value * currency.rates["JOD"]);
            inr.innerText = Math.round(input.value * currency.rates["INR"]);
        });
};

