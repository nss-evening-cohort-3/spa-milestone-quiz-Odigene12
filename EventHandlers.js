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
	originalCarLot.colorChange(event);
	originalCarLot.borderChange(event);
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
				input.value = "";
				input.focus();	
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
		let theseCars = document.getElementsByClassName("car");
		let theseBios = document.getElementsByClassName("description");
			input.addEventListener("keypress", function(event) {
				console.log(chosenCar);
				if (chosenCar.classList.contains("selected")) {
					let userDescription = event.currentTarget.value;
					chosenBio.innerHTML = userDescription;
				}
			})
		}

	
	originalCarLot.colorChange = function(event) {
		if(event.target.parentNode.id === firstCar.id || event.target.id === firstCar.id ){
		firstCar.classList.toggle("firstbackground")
	}
		else if(event.target.parentNode.id === secondCar.id || event.target.id === secondCar.id){
			secondCar.classList.toggle("secondbackground")
		}
			else if (event.target.parentNode.id === thirdCar.id || event.target.id === thirdCar.id) {
				thirdCar.classList.toggle("thirdbackground")
			}
				else if (event.target.parentNode.id === fourthCar.id || event.target.id === fourthCar.id) {
					fourthCar.classList.toggle("fourthbackground")
				};
			};

	originalCarLot.borderChange = function(event) {
		if(event.target.parentNode.id === firstCar.id || event.target.id === firstCar.id ){
		firstCar.classList.toggle("firstwidth")
	}
		else if(event.target.parentNode.id === secondCar.id || event.target.id === secondCar.id){
			secondCar.classList.toggle("secondwidth")
		}
			else if (event.target.parentNode.id === thirdCar.id || event.target.id === thirdCar.id) {
				thirdCar.classList.toggle("thirdwidth")
			}
				else if (event.target.parentNode.id === fourthCar.id || event.target.id === fourthCar.id) {
					fourthCar.classList.toggle("fourthwidth")
				};
			};

CarLot.loadInventory(activateEvents);

return originalCarLot;

})(CarLot);