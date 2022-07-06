const word_el = document.getElementById('word');
const correctLetters = ['j','h','m','v','c','t','p'];
const wrongLetters = [];
displayWord();

function getRandomWord(){
    const word = ['javascript','html','python','java'];
    const wordLenght = word.length;

    const random = Math.floor(Math.random() * wordLenght);
    return word[random];
}






function displayWord(){
    const selectWord = getRandomWord();



    word_el.innerHTML = `${selectWord.split('').map(letter => `
    <div class="letter"> ${correctLetters.includes(letter) ? letter : ''} </div>`).join('')}`;

    console.log(word_el.innerText.replace(/\n/g,''));
    const w = word_el.innerText.replace(/\n/g,'');
    if(w == selectWord){
        console.log('Bildiniz');
    }


}






