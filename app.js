// Escribe tu código aquí.
const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];

function bigWords(word, array) {
    return array.filter(xd => xd.length > word.length);
}

function printArray(array) {
    const list = document.getElementById('myList');
    list.innerHTML = array.map(xd => `<li>${xd}</li>`).join('');
}

const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', () => {
    const inputWord = document.getElementById('inputWord').value;
    const bigWordsArray = bigWords(inputWord, myArray);
    printArray(bigWordsArray);
});