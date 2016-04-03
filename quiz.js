"use strict"
let CarLot = (function (originalCarLot) {
	let container = document.getElementById("container");
	let vehicles = cars[i];
function populatePage (originalCarLot) {
  // Loop over the inventory and populate the page
  	for(var i = 0; i < cars.length; i++) {
originalCarLot.carstoDOM = function (vehicles) {
  		container.innerHTML += `<h1 class = "type">${vehicles.make} ${vehicles.model}</h1><section><p>${vehicles.year} ${vehicles.price}</p><footer>${vehicles.purchased} ${vehicles.description}</footer>`
  	};
 }

  	// build each car card
  	
  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
	}
}
// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();