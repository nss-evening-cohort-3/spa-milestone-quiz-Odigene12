"use strict"

// This is the iife that holds the functions that allows the border and background colors of the cards to change when they are clicked. The click function itself is called in the EventHandlers.js
var CarLot = ( function (originalCarLot) {
// create a variable within this iife that captures the "car" class from the string you built before this.
let cars = document.getElementsByClassName("car");
// create a variable that captures the id of the input field. You created the Id in the html file.
let input = document.getElementById("userInput");

// This is the function that loops through the cars and immediately focuses on the cursor in the input field and clears out anything previously type while at the same time calls the events to change the border and color of each card.
function borderEvents (inventory) {		

for(var i = 0; i < cars.length; i++) {
	cars[i].addEventListener("click", function (event) {
				//this immediately makes the input field blank when any of the cars are clicked. 
				input.value = "";
				// this immediately puts the cursor in the input field when any of the cars are clicked.
				input.focus();
	
	
	
		});
	}
};

	// This function is the one that changes the color of each card. The function takes on 2 arguments. One of them is for that selected car, and the other is the class name that is being assigned for the color.
	originalCarLot.colorChange = function(Car, ClassName) {		
			// You can give a generic name to the arguments that are being passed through the function and use them within the function as long as they are actually defined when the function is called. The function also must take on the same amount of arguments as seen here.
			Car.classList.add(ClassName);		
}

	// This function is the one that changes that increases the size of the border for each card. The function takes on 2 arguments. One of them is for that selected car, and the other is the class name that is being assigned for the border size.
	originalCarLot.borderChange = function(Car, BorderClass) {
			// You can give a generic name to the arguments that are being passed through the function and use them within the function as long as they are actually defined when the function is called. The function also must take on the same amount of arguments as seen here.
			Car.classList.add(BorderClass);	
	}
	

// This is where the iifee gets called and takes on the argument (or passes through)
CarLot.loadInventory(borderEvents);

return originalCarLot;

})(CarLot);