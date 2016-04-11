"use strict"

// This is the beginning of the iffe for this file.
var CarLot = ( function (originalCarLot) {
let cars = document.getElementsByClassName("car");
let input = document.getElementById("userInput");
let carBio = document.getElementsByClassName("description");

// This is the function that loops through the cars and immediately focuses on the cursor in the input field and clears out anything previously type while at the same time calls the events to change the border and color of each card.
function borderEvents (inventory) {		

for(var i = 0; i < cars.length; i++) {
	cars[i].addEventListener("click", function (event) {
				input.value = "";
				input.focus();
	// originalCarLot.resetAll();
	originalCarLot.colorChange(event);
	originalCarLot.borderChange(event);
	
		});
	}
};

	// This function is the one that changes the color of each card.
	originalCarLot.colorChange = function(event) {
		for(var i = 0; i < cars.length; i++){		
		let allCars = document.getElementsByClassName(`car${i}`);
	}	
}
	// This function is the one that changes that increases the size of the border for each card.
	originalCarLot.borderChange = function(event) {
		for(var i = 0; i < cars.length; i++){
		let allCars = document.getElementsByClassName(`car${i}`)
	};
}	
			// This function is supposed to reset all cards back to their original borders and colors when a different one is clicked.
	// 		originalCarLot.resetAll = function () {
	// 			if(event.target.parentNode.id === firstCar.id || event.target.id === firstCar.id ){
	// 			firstCar.classList.remove("firstwidth", "firstbackground")
	// }
	// 	else if(event.target.parentNode.id === secondCar.id || event.target.id === secondCar.id){
	// 			secondCar.classList.remove("secondwidth", "secondbackground")
	// 	}
	// 		else if (event.target.parentNode.id === thirdCar.id || event.target.id === thirdCar.id) {
	// 			thirdCar.classList.remove("thirdwidth", "thirdbackground")
	// 		}
	// 			else if (event.target.parentNode.id === fourthCar.id || event.target.id === fourthCar.id) {
	// 			fourthCar.classList.remove("fourthwidth", "fourthbackground")
	// 			};
	// 		};

// This is where the iifee gets called.
CarLot.loadInventory(borderEvents);

return originalCarLot;

})(CarLot);