"use script"

function populatePage (inventory) {
  // Loop over the inventory and populate the page
  	for (var i = 0; i < cars.length; i++) {
  		let theCar = cars[i];
  			buildCard(theCar); 
  	};
// Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();

// create a function that takes the information from json and builds card for each car
function buildCard(theCar) {
	container.innerHTML += `<theCar class = "card"><header>${theCar.make} ${theCar.model} ${theCar.year}</header><section><p>${theCar.price} ${theCar.color} ${theCar.purchased} ${theCar.description}</p>`
}
