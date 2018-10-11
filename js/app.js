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
 for(let i = 0; i < cardList.length; i++)
 {
     const card = document.createElement("li");
     card.classList.add("card");
     card.innerHTML = `<i class="${cardList[i]}"></i>`;
     cardContainer.appendChild(card);

     //Card Click Event
    card.addEventListener('click',function(){

        const currentCard = this;
        const previousCard = openCards[0];
        // Incase there is an existing card open 
        if( openCards.length === 1)
        {

            
            card.classList.add("open","show");
            openCards.push(this);

            //Attempt to Compare the Open Cards 
            if(currentCard.innerHTML === previousCard.innerHTML){
                
                currentCard.classList.add("match");
                previousCard.classList.add("match");
                matchedCards.push(currentCard,previousCard);

                openCards = [];

                //Checking if the game has ended 
                isOver();
            }
            else{

                currentCard.classList.remove("open","show");
                previousCard.classList.remove("open","show");

                openCards = [];
            }
        }
        else
        {
            //Incase there is no existing card open 
            currentCard.classList.add("open","show");
            openCards.push(this);

        }
        
    });

 }

 function isOver()
 {
        if(matchedCards.length === cardList.length)
        {
            alert("Game Over");
        }
 }

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

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
