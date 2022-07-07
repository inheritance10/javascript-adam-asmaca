const word_el = document.getElementById('word');
const popup = document.getElementById('popup-container');
const message_el = document.getElementById('success-message');
const wrongLetters_el = document.getElementById('wrong-letters');
const items = document.querySelectorAll('.item');
const message = document.getElementById('message');
const play_again = document.getElementById('play-again');

const correctLetters = [];
const wrongLetters = [];
let selectWord = getRandomWord();

displayWord();



function getRandomWord(){
    const word = ['javascript','html','python','java'];
    const wordLenght = word.length;

    const random = Math.floor(Math.random() * wordLenght);
    return word[random];
}




play_again.addEventListener('click',function (){
   correctLetters.splice(0);
   wrongLetters.splice(0);
    selectWord = getRandomWord();



   displayWord();
   updateWrongLetters();
   popup.style.display = "none";

})


function displayWord(){

    word_el.innerHTML = `${selectWord.split('').map(letter => `
    <div class="letter"> ${correctLetters.includes(letter) ? letter : ''} </div>`).join('')}`;

    console.log(word_el.innerText.replace(/\n/g,''));
    const w = word_el.innerText.replace(/\n/g,'');
    if(w == selectWord){
        popup.style.display ='flex';
        message_el.innerText = "Tebrkler kazandınız";
    }
}

function displayMessage(message_param){
    message.classList.add('show');
    message.innerText = message_param;
    setTimeout(function (){
        message.classList.remove('show');

    },2000);
}
let message_param = "";
window.addEventListener('keydown',function (e){

    if(e.keyCode >=65 && e.keyCode<=90 || e.keyCode == 222){
        const letter = e.key;
        if(selectWord.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter);
                displayWord();
            }else{
                message_param = "Bu harf zaten doğru olarak girildi";
                displayMessage(message_param);
            }
        }else{
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter);
                updateWrongLetters();
            }else{
                message_param = 'Bu harf zaten hatalı olarak girildi';
                displayMessage(message_param);
            }
        }
    }


})


function updateWrongLetters(){
    wrongLetters_el.innerHTML = `
   ${wrongLetters.length>0 ? '<h3>Hatalı Harfler</h3>':""}
   ${wrongLetters.map(letter => `<span>${letter}</span>`)}
   `

    items.forEach((item,index)=> {
        const errorCount = wrongLetters.length;

        if(index<errorCount){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });

    if(wrongLetters.length === items.length){
        popup.style.display ='flex';
        popup.style.color = "red";
        message_el.innerText = "Oyunu Kaybettiniz";
    }


}






