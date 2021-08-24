//https://api.funtranslations.com/translate/pirate.json

const inputText=document.querySelector('#inputText');
const resultText=document.querySelector("#resultText");
const btn=document.querySelector("#btn-translate");


function display(){
    console.log(inputText.value);
    resultText.innerText=inputText.value;
}

btn.addEventListener("click",display);