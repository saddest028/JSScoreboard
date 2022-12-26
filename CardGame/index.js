//let firstCard = getRandomCard(); moved to start game
//let secondCard = getRandomCard();
let player = {
    name: "sad",
    credits: 200,
    //function inside an object
    //sayHello: function() {
    //    console.log("Heisann!")
    //}
}

let cards = []; 
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageOne = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
//let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");




let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.credits;

function startGame(){
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    //cards.push(firstCard, secondCard);
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true;

    renderGame();
}


function getRandomCard(){
    let randomOne = Math.floor( Math.random() * 13) + 1;
    if (randomOne === 1)
    {
        return 11;
    }
    else if(randomOne > 10){
        return 10;
    }
    else{
        return randomOne;
    }
    //return Math.floor( Math.random() * 13) + 1;
}

function renderGame(){
    if(sum < 21){
    message = "less than 21"
    } 
    else if(sum === 21){
     message = "equals 21"
     hasBlackJack = true;
    }
    else{
        message = "over 21"
        isAlive = false;
    }

    console.log("Has BlackJack? " + hasBlackJack)
    console.log("Is alive? " + isAlive)
    messageOne.textContent = message;
    sumEl.innerText = "Sum: " + sum;

    cardsEl.innerText = "Cards: ";
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    
}

function newCard(){
   
    if(isAlive === true && hasBlackJack === false){
        let nextCard = getRandomCard();
        sum += nextCard;
        cards.push(nextCard);
        renderGame();
    }
    //let nextCard = getRandomCard();
    //sum += nextCard;  
}

/*function startGame(){
    if(sum < 21){
    messageOne.innerText = "less than 21"
    } 
    else if(sum === 21){
     messageOne.innerText = "equals 21"
     hasBlackJack = true;
    }
    else{
        messageOne.innerText = "over 21"
        isAlive = false;
    }

    console.log("Has BlackJack? " + hasBlackJack)
    console.log("Is alive? " + isAlive)
    console.log(message);
    
}*/