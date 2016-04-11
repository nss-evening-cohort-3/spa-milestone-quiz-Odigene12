"use strict"


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

function activateEvents (inventory) {		

for(var i = 0; i < cars.length; i++) {
	cars[i].addEventListener("click", function (event) {
	originalCarLot.changeBio();
	
		});
	}
	originalCarLot.bindItUp();
};
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
				
			})
		}
	}


	originalCarLot.removeSelection = function () {
		let cars = document.getElementsByClassName("car");
		for(let i = 0; i < cars.length; i++) {
			cars[i].classList.remove("selected");
		}
	}
		
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

CarLot.loadInventory(activateEvents);

return originalCarLot;

})(CarLot);