//create space within html that we want to target for the buttons and canvas
//make an array of food items to feed to the caterpillar 
//make a button 
//make a loop for the button 
//when the button clicks it creates the span 
//add styling

const fruits = ['apple', 'banana', 'kiwi', 'kumquat', 'watermelon'];


const fruitNode = document.getElementById('fruit-buttons');


for(let index = 0; index < fruits.length; index++) {
    let fruit = fruits[index];
    
    const button = document.createElement('button');
    fruitNode.appendChild(button);
    button.textContent = fruit;

    button.addEventListener('click', function(){
        console.log(fruit);
    });


}

