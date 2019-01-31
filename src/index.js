//create space within html that we want to target for the buttons and canvas
//make an array of food items to feed to the caterpillar 
//make a button 
//make a loop for the button 
//when the button clicks it creates the span 
//add styling

const fruitNode = document.getElementById('fruit-buttons');
const button = document.createElement('button');

fruitNode.appendChild(button);
button.textContent = 'feed me';