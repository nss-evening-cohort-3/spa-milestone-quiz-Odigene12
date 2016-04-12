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
	
	
	
		});
	}
};

	// This function is the one that changes the color of each card.
	originalCarLot.colorChange = function(Car, ClassName) {		
			Car.classList.add(ClassName);		
}

	// This function is the one that changes that increases the size of the border for each card.
	originalCarLot.borderChange = function(Car, BorderClass) {
			Car.classList.add(BorderClass);	
	}
	

// This is where the iifee gets called.
CarLot.loadInventory(borderEvents);

return originalCarLot;

})(CarLot);