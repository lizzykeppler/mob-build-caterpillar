//create space within html that we want to target for the buttons and canvas
//make an array of food items to feed to the caterpillar 
//make a button 
//make a loop for the button 
//when the button clicks it creates the span 
//add styling

const fruits = ['apple', 'banana', 'kiwi', 'kumquat', 'watermelon'];
const fruitNode = document.getElementById('fruit-buttons');
const caterpillarNode = document.getElementById('caterpillar');

for(let index = 0; index < fruits.length; index++) {
    let fruit = fruits[index];
    
    const button = document.createElement('button');
    fruitNode.appendChild(button);
    button.textContent = fruit;
    button.classList.add(fruit, 'fruit-button');
    
    
    button.addEventListener('click', function(){
        const catSpan = document.createElement('span');
        caterpillarNode.appendChild(catSpan);
        catSpan.classList.add('fruit-span', fruit + '-circle', fruit);
    });
}

//dance button code//

const danceNode = document.getElementById('dance-button');
const danceButton = document.createElement('button');
danceNode.appendChild(danceButton);
danceButton.textContent = 'Make it dance...';

danceButton.addEventListener('click', function() {
    
});
