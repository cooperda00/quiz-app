//Variables
let score = 0;

//Buttons
const startButton = document.querySelector('.question-start button');
const calcButton = document.querySelector('.question-end button');

//Question One Answers
const Q1A1 = document.querySelector('#Q1A1');
const Q1A2 = document.querySelector('#Q1A2');
const Q1A3 = document.querySelector('#Q1A3');

//Question Two Answers
const Q2A1 = document.querySelector('#Q2A1');
const Q2A2 = document.querySelector('#Q2A2');
const Q2A3 = document.querySelector('#Q2A3');

//Question Three Answers
const Q3A1 = document.querySelector('#Q3A1');
const Q3A2 = document.querySelector('#Q3A2');
const Q3A3 = document.querySelector('#Q3A3');

//Question Four Answers
const Q4A1 = document.querySelector('#Q4A1');
const Q4A2 = document.querySelector('#Q4A2');
const Q4A3 = document.querySelector('#Q4A3');

//-----------------------------------------------------------------------------

//Functions

//Display Next Card Function
function nextCard(card, display = 'flex'){
    document.querySelector('.question' + card).style.display = display;
}

//Hide Card Function
function hideCard(card) {
    document.querySelector('.question' + card).style.display = 'none'; 
}

//-------------------------------------------------------------------------------

//Event Listeners

//Start Button 
startButton.addEventListener('click', () => {
    nextCard(1);
    hideCard('-start');
});

//Calculate Button
calcButton.addEventListener('click', () => {
    if (score < 7) {
        nextCard('-robin');
    } else if (score >= 7 && score < 10) {
        nextCard('-snake');
    } else {
        nextCard('-bear');
    }
    hideCard('-end');
});

//Question 1 Answers
Q1A1.addEventListener('click', () => {
    score = score +3;
    nextCard(2);
    hideCard(1);
});
Q1A2.addEventListener('click', () => {
    score = score +2;
    nextCard(2);
    hideCard(1);
});
Q1A3.addEventListener('click', () => {
    score = score +1;
    nextCard(2);
    hideCard(1);
});

//Question 2 Answers
Q2A1.addEventListener('click', () => {
    score = score +3;
    nextCard(3);
    hideCard(2);
});
Q2A2.addEventListener('click', () => {
    score = score +2;
    nextCard(3);
    hideCard(2);
});
Q2A3.addEventListener('click', () => {
    score = score +1;
    nextCard(3);
    hideCard(2);
});

//Question 3 Answers
Q3A1.addEventListener('click', () => {
    score = score +3;
    nextCard(4);
    hideCard(3);
});
Q3A2.addEventListener('click', () => {
    score = score +2;
    nextCard(4);
    hideCard(3);
});
Q3A3.addEventListener('click', () => {
    score = score +1;
    nextCard(4);
    hideCard(3);
});

//Question 4 Answers
Q4A1.addEventListener('click', () => {
    score = score +3;
    nextCard('-end', 'flex');
    hideCard(4);
});
Q4A2.addEventListener('click', () => {
    score = score +2;
    nextCard('-end', 'flex');
    hideCard(4);
});
Q4A3.addEventListener('click', () => {
    score = score +1;
    nextCard('-end', 'flex');
    hideCard(4);
});