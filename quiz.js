"use strict"

// This is the beginning of the iife to populate the dom with the cards.
var CarLot = (function (originalCarLot) {

// This is the function that loops through the inventory, builds the string and bootstrap for each car and populates the dom with that information.
function populatePage (inventory) {
 let carCard = document.getElementById("card");
 let outputString = "";
 // Loop over the inventory and populate the page
  	for(var i = 0; i < inventory.length; i++) {
  		let currentCar = inventory[i];
  		let newCars = document.getElementById("cards")
  		outputString = `<div class= "car${i} car col-xs-4"><h1>${currentCar.make} ${currentCar.model} ${currentCar.year}</h1><h2>${currentCar.price}</h2><h3>${currentCar.color}</h3><h4>${currentCar.purchased}</h4><p class= "bio">${currentCar.description}</p></div></div>`
  		console.log(outputString);
  	newCars.innerHTML += outputString; 
  	}

  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);

return originalCarLot

})(CarLot);