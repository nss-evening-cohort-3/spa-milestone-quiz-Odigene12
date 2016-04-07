"use strict"

var CarLot = ( function (originalCarLot) {
let newBio = "";
let firstCar = document.getElementById("car0");	
let secondCar = document.getElementById("car1");	
let thirdCar = document.getElementById("car2");	
let fourthCar = document.getElementById("car3");	
let cars = document.getElementsByClassName("car");
let input = document.getElementById("userInput");

function activateEvents (inventory) {		

for(var i = 0; i < cars.length; i++) {
	cars[i].addEventListener("click", function (event) {
	originalCarLot.colorChange(event);
	originalCarLot.borderChange(event);
	originalCarLot.clearValue(event);
	changeBio();
		});
	}
};


		function changeBio (inventory) {
		input.addEventListener("keyup", function(event){
		let newInput = input.value
		let newBio = 
			})
		}


	originalCarLot.clearValue = function(event){
		input.value= "";
		input.focus();
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