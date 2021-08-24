let count = 0;
let counter = document.querySelector(".counter");

counter.innerHTML = count;

document.getElementById('plus').addEventListener('click', () => {
    count++;
    counter.innerHTML = count;
});

document.getElementById('minus').addEventListener('click', () => {
    count--;
    count = (count < 0) ? 0 : count;
    counter.innerHTML = count;
});


let conta = 0;
let Contador = document.querySelector(".Contador");

Contador.innerHTML = conta;

document.getElementById('mais').addEventListener('click', () => {
    conta++;
    Contador.innerHTML = conta;
});

document.getElementById('menos').addEventListener('click', () => {
    conta--;
    conta = (conta < 0) ? 0 : conta;
    Contador.innerHTML = conta;
});


TimeUm.addEventListener('keyup', function() {
    document.querySelector('.Time1').innerHTML = this.value;
});


TimeDois.addEventListener('keyup', function() {
    document.querySelector('.Time2').innerHTML = this.value;
});