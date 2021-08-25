//https://api.funtranslations.com/translate/pirate.json
//https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json

const inputText=document.querySelector('#inputText');
const resultText=document.querySelector("#resultText");
const btn=document.querySelector("#btn-translate");

const URL="https://api.funtranslations.com/translate/pirate.json";

function createURL(text){
    var textURL=`${URL}?text=${text}`;
    return textURL;
}

function display(){
    fetch(createURL(inputText.value))
    .then(response=>response.json())
    .then(json=>{resultText.innerText=json.contents.translated;
    })
    
}

btn.addEventListener("click",display);