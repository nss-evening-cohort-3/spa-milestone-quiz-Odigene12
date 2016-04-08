"use strict"

var CarLot = ( function (originalCarLot) {
let firstCar = document.getElementById("car0");	
let secondCar = document.getElementById("car1");	
let thirdCar = document.getElementById("car2");	
let fourthCar = document.getElementById("car3");	
let cars = document.getElementsByClassName("car");
let input = document.getElementById("userInput");
let carBio = document.getElementsByClassName("description");

function activateEvents (inventory) {		

for(var i = 0; i < cars.length; i++) {
	cars[i].addEventListener("click", function (event) {
	originalCarLot.colorChange(event);
	originalCarLot.borderChange(event);
	originalCarLot.clearValue(event);
	originalCarLot.changeBio();
		});
	}
};


		originalCarLot.changeBio = function () {
				let theseCars = document.getElementsByClassName("car");
				let carBio = document.getElementsByClassName("description");
				for (let i = 0; i < cars.length; i++) {
					let newCar = theseCars[i];
					let newDesc = carBio[i];
			input.addEventListener("keyup", function(event) {
				if (theseCars.classList.contains("selected")) {
					let userWrite = event.currentTarget.value;
					newDesc.innerHTML = userWrite;
				}
			})	
		}
	}	
		originalCarLot.removeSelection = function () {
			let theseCars = document.getElementsByClassName("car");
			for (let i = 0; i < cars.length; i++) {
				cars[i].classList.remove("selected")
			}
		}




	originalCarLot.clearValue = function(event){
		for (let i = 0; i < cars.length; i++){
			CarLot.removeSelection();
			let thisCar = cars[i];
			let thisDesc = carBio[i];
			thisCar.classList.add("selected");
			input.value= "";
			input.focus();
		}
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