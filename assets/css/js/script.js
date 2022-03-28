var currentNumberWrapper = document.getElementById('currentNumber');
var adiciona = document.getElementById('add').addEventListener('click',increment());
var subtrai = document.getElementById('sub').addEventListener('click',decrement());
var currentNumber = 0;



/*function conta(){
    subtrai.addEventListener('click',decrement())
    adiciona.addEventListener('click',increment())
    
}*/


function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}