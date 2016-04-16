"use strict"

// This is the beginning of the iife to populate the dom with the cards.
var CarLot = (function (originalCarLot) {

// This is the function that loops through the inventory, builds the string and bootstrap for each car and populates the dom with that information.
function populatePage(inventory) {
     //do these steps:
     //step 1 select the dom element in which you want the cards to be nested or contained.
     let carCard = document.getElementById("cards");
     // create a variable that has a value (equals) an empty string that will hold the information of each car before it is placed inside of a div element that contains or holds the cards.
     let outputString = "";
     let cardDiv = document.createElement("div");
     //step 2 loop through your inventory and concatenate your string (you've already done this in your version, but you've got extra stuff there you don't need like the newCards variable)
     for(var i = 0; i < inventory.length; i++) {
  		let currentCar = inventory[i];
  		outputString = `<div class= "car${i} car col-xs-4 "><h1>${currentCar.make} ${currentCar.model} ${currentCar.year}</h1><h2>${currentCar.price}</h2><h3>${currentCar.color}</h3><h4>${currentCar.purchased}</h4><p class= "bio">${currentCar.description}</p></div></div>`
  		//step 3 set the value of the inner html of the new html element you made in step 2 to the value of the string you've concatenated in step 3 (you are sorta doing this with the newCars.innerHTML +=outputstring. Instead of newCars you are going to use the element you made in step 2 before the for loop)
  	cardDiv.innerHTML += outputString;
  	} 
     //step 5 append element you've created to the Dom element you had in step 1. It's going to look like this: carCard.appendChild(cardDiv);
     carCard.appendChild(cardDiv);
  // Now that the DOM is loaded, establish all the event listeners needed
CarLot.activateEvents();
	
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);
return originalCarLot

})(CarLot);