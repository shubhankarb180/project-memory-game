/*
 * Create a list that holds all of your cards
 */

 const cardList = ["fa fa-diamond","fa fa-diamond","fa fa-paper-plane-o",
 "fa fa-paper-plane-o","fa fa-anchor","fa fa-anchor","fa fa-bolt","fa fa-bolt",
 "fa fa-cube","fa fa-cube","fa fa-leaf","fa fa-leaf","fa fa-bicycle",
 "fa fa-bicycle","fa fa-bomb","fa fa-bomb"]; 


 //Creating a holder for cards 
 const cardContainer = document.querySelector(".deck");

 let openCards = [];
 let matchedCards = [];

 // Creating Cards 
 function initial()
 {
     
    for(let i = 0; i < cardList.length; i++)
    {
        const card = document.createElement("li");
        card.classList.add("card");
        card.innerHTML = `<i class="${cardList[i]}"></i>`;
        cardContainer.appendChild(card);

        //Card Click Event Call
        click(card);

    }
 }

 /* 
 * Function for Card Click 
 */

 function click(card){
    card.addEventListener('click',function(){

        const currentCard = this;
        const previousCard = openCards[0];
        // Incase there is an existing card open 
        if( openCards.length === 1)
        {

            
            card.classList.add("open","show","disable");
            openCards.push(this);

            //Attempt to Compare the Open Cards 
            compare(currentCard, previousCard);
        }
        else
        {
            //Incase there is no existing card open 
            currentCard.classList.add("open","show","disable");
            openCards.push(this);

        }
        
    });
 }

 //Function to Compare 2 Cards 
 function compare(currentCard, previousCard) {

    //Matching of Cards
    if(currentCard.innerHTML === previousCard.innerHTML){
                
        currentCard.classList.add("match");
        previousCard.classList.add("match");
        matchedCards.push(currentCard,previousCard);

        openCards = [];

        //Checking if the game has ended 
        isOver();
    }
    else{

        
        //TImer set to 300 miliseconds
        setTimeout(function() {
            currentCard.classList.remove("open","show","disable");
            previousCard.classList.remove("open","show","disable");
            openCards = [];
        },300);    
    }

    //Addition of New Move
    addMoves();
 }

 //Check if the Game is Over 
 function isOver()
 {
        if(matchedCards.length === cardList.length)
        {
            alert("Game Over");
        }
 }

 //Move Counter
 const moveContainer = document.querySelector(".moves");
 let move = 0;
 moveContainer.innerHTML = 0;
 function addMoves(){
    move++;
    moveContainer.innerHTML = move;

    //Set Rating 
    rating();
 }

 //Rating 
 const starsContainer = document.querySelector(".stars");
 starsContainer.innerHTML = `<li><i class="fa fa-star"></i></li>
 <li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>`;
 function rating()
{   
    if(move > 17 && move < 25)
    {
        starsContainer.innerHTML = `<li><i class="fa fa-star"></i></li>
        <li><i class="fa fa-star"></i></li>`;
    }
    else if(move > 25)
    {
        starsContainer.innerHTML = `<li><i class="fa fa-star"></i></li>`;
    }
 }

 //To reset or restart the game 
 const restarter = document.querySelector(".restart");
 restarter.addEventListener("click", function(){
        //Delete All Cards
        cardContainer.innerHTML = "";

        //Create New Cards from Initial Function 
        initial();

        //Reset Variables
        matchedCards = [];
        move = 0;
        moveContainer.innerHTML = move;
        starsContainer.innerHTML = `<li><i class="fa fa-star"></i></li>
        <li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>`;

 });
 // Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


 //First Time Run for Game
 shuffle(cardList);
 initial();

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
