"use strict"

// This is the beginning of the iife in which the variables are set at the top. 
var CarLot = ( function (originalCarLot) {
let firstCar = document.getElementById("car0");	
let secondCar = document.getElementById("car1");	
let thirdCar = document.getElementById("car2");	
let fourthCar = document.getElementById("car3");	
let cars = document.getElementsByClassName("car");
let input = document.getElementById("userInput");
let carBio = document.getElementsByClassName("description");
let chosenCar;
let chosenBio;

// The events are all called in this function.
function activateEvents (inventory) {		

for(var i = 0; i < cars.length; i++) {
	cars[i].addEventListener("click", function (event) {
	originalCarLot.changeBio();
	
		});
	}
	originalCarLot.bindItUp();
};

	// This function is to go through each car on the dom and attach one of the css classes to them when clicked
	originalCarLot.changeBio = function() {
		let demCars = document.getElementsByClassName("car");
		let carBio = document.getElementsByClassName("bio");
		for(let i = 0; i < cars.length; i++) {
			let thisCar = demCars[i];
			let thisBio = carBio[i];
			thisCar.addEventListener("click", function() {
				CarLot.removeSelection();
				thisCar.classList.add("selected")	
				chosenCar = thisCar;
				chosenBio = thisBio;
				if (event.target.id === car[i])						
				
			})
		}
	}

	// This function is supposed to remove deselect the car that was previously clicked on when another car is clicked.
	originalCarLot.removeSelection = function () {
		let cars = document.getElementsByClassName("car");
		for(let i = 0; i < cars.length; i++) {
			cars[i].classList.remove("selected");
		}
	}
		//This function will allow the user to change the description for the selected car 
	originalCarLot.bindItUp = function() {
		let demCars = document.getElementsByClassName("car");
		let carBio = document.getElementsByClassName("bio");
			input.addEventListener("keypress", function(event) {
				for(let i = 0; i < cars.length; i++){
				let thisCar = demCars[i];
				let thisBio = carBio[i];
					chosenCar = thisCar;
					chosenBio = thisBio;
					console.log(chosenCar);
				}	
			})
		}
// The iife is called and immediately loads.
CarLot.loadInventory(activateEvents);

return originalCarLot;

})(CarLot);