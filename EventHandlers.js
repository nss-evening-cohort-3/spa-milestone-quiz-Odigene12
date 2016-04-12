"use strict"

// This is the beginning of the iife in which the variables are set at the top. 
var CarLot = ( function (originalCarLot) {	
let cars = document.getElementsByClassName("car");
let input = document.getElementById("userInput");
let carBio = document.getElementsByClassName("bio");
let carDes = document.getElementsByClassName("description");
let chosenCar;
let chosenBio;

// The events are all called in this function.
function activateEvents (inventory) {		
for(var i = 0; i < cars.length; i++) {
		let chosenBio = carBio[i]
		let chosenCar = cars[i];
	cars[i].addEventListener("click", function (event) {	
	originalCarLot.removeSelection("colorBack", "borderBack")	
	originalCarLot.colorChange(event.currentTarget, "colorBack");
	originalCarLot.borderChange(event.currentTarget, "borderBack");
	originalCarLot.bindItUp();
		});
	}
	
};


	// This function is supposed to remove deselect the car that was previously clicked on when another car is clicked.
	originalCarLot.removeSelection = function (ClassName, BorderName) {
		for(var i = 0; i < cars.length; i++){
			cars[i].classList.remove(ClassName, BorderName)
		}
	}
		//This function will allow the user to change the description for the selected car 
	originalCarLot.bindItUp = function() {
			input.addEventListener("keypress", function(event) {
				
			})
		}
// The iife is called and immediately loads.
CarLot.loadInventory(activateEvents);

return originalCarLot;

}) (CarLot);