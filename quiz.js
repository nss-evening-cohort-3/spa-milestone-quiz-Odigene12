"use strict"

function populatePage (inventory) {
 let carCard = document.getElementById("card");
 let outputString = "";
 // Loop over the inventory and populate the page
  	for(var i = 0; i < inventory.length; i++) {
  		let currentCar = inventory[i];
  		outputString += `<h1>${currentCar.make}${currentCar.model}${currentCar.year}</h1><h2>${currentCar.price}${currentCar.color}</h2><p>${currentCar.purchased}${currentCar.description}</p>`
  	}

  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(CarLot.populatePage);