/**
 * Author: Rohit Satheesan
 * Description: The shuffle and sort application gives the user the ability to shuffle and sort a set of 9 cards on the screen.
 */
let numbersArray = [];
const colorsArray = ['#6F98A8', '#2B8EAD', '#2F454E', '#2B8EAD', '#2F454E', '#BFBFBF', '#BFBFBF', '#6F98A8', '#2F454E'];

/**
 * loadNumberContainer(): The function that is called on load of the page. 
 * Description: The function creates the NumbersArray and creates initial stack of cards sorted in ascending order.
 */
const loadNumberContainer = () => {
  createNumbersArray();
  sort();
}

/**
 * shuffle(): The function shuffles the stack by randomly generating the NumbersArray and displays the shuffled stack on screen.
 */
const shuffle = () => {
  numbersArray = [];
  createNumbersArray();
  clearNumberContainer();
  for (let i=0; i < numbersArray.length; i++) {
    createNumberElements(numbersArray[i]);
  }
}

/**
 * sort(): The function sorts the numbersArray in ascending order and displays the sorted stack on screen.
 */
const sort = () => {
  numbersArray.sort();
  clearNumberContainer();
  for (let i=0; i < numbersArray.length; i++) {
    createNumberElements(numbersArray[i]);
  }
}

/**
 * createNumbersArray(): The function creates the Numbers Array by randomly generating numbers between 1 to 9.
 */
const createNumbersArray = () => {
  while (numbersArray.length < 9) {
    const value = Math.floor(Math.random() * 10) + 1;
    if (numbersArray.indexOf(value) === -1 && value !== 10) {
      numbersArray.push(value);
    }
  }
}

/**
 * createNumberElements(number): The function creates the number card that is displayed on the page.
 * @param {*} number 
 */
const createNumberElements = (number) => {
  let numDiv = document.createElement('div');
  numDiv.className = 'item';
  numDiv.style = `background-color: ${colorsArray[number - 1]}`;
  document.getElementsByClassName('numbers-container')[0].appendChild(numDiv);
  let para = document.createElement('p');
  para.innerHTML = number;
  numDiv.appendChild(para);
}

/**
 * clearNumberContainer(): The function clears the number container before loading the fresh stack of cards.
 */
const clearNumberContainer = () => {
  document.getElementsByClassName('numbers-container')[0].innerHTML = '';
}