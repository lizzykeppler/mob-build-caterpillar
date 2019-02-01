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
        catSpan.classList.add('fruit-span', fruit); //adding two classes; one is a string
        let fruitCircleSelector = fruit + '-circle'; //concatonating the fruit
        catSpan.classList.add(fruitCircleSelector); //
        console.log(catSpan);
    });
} 

//dance button code//
for(let index = 0; index < fruits.length; index++) {
    let fruit = fruits[index];
    const danceNode = document.getElementById('dance-button'); //grabbing 
    const danceButton = document.createElement('button'); //creating
    danceNode.appendChild(danceButton);
    danceButton.textContent = fruit + ' dance';

    danceButton.addEventListener('click', function() {
        const fruitSpanArray = document.querySelectorAll('.' + fruit + '-circle');  //grabbed 
        const allFruitSpanArray = document.querySelectorAll('.fruit-span');

        for(let index = 0; index < allFruitSpanArray.length; index++) {
            allFruitSpanArray[index].classList.remove('fruit-dance');  
        }
        
        
        
        for(let index = 0; index < fruitSpanArray.length; index++) {
            fruitSpanArray[index].classList.add('fruit-dance');  //attaching a class to these Nodes
        }
    });



}



