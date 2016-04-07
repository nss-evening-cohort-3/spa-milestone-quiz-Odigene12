"use strict"

var CarLot = (function (originalCarLot) {


function populatePage (inventory) {
 let carCard = document.getElementById("card");
 let outputString = "";
 // Loop over the inventory and populate the page
  	for(var i = 0; i < inventory.length; i++) {
  		let currentCar = inventory[i];
  		let newCars = document.getElementById(`car${i}`)
  		outputString = `<h1>${currentCar.make} ${currentCar.model} ${currentCar.year}</h1><h2>${currentCar.price}</h2><h3>${currentCar.color}</h3><h4>${currentCar.purchased}</h4><p class= "bio">${currentCar.description}</p>`
  	newCars.innerHTML = outputString; 
  	}

  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);

return originalCarLot

})(CarLot);