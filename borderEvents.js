"use strict"

var CarLot = ( function (originalCarLot) {
let cars = document.getElementsByClassName("car");
let input = document.getElementById("userInput");
let carBio = document.getElementsByClassName("description");

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

	
	originalCarLot.colorChange = function(event) {
		for(var i = 0; i < cars.length; i++){		
		let allCars = document.getElementsByClassName(`car${i}`);
	}	
}
	originalCarLot.borderChange = function(event) {
		for(var i = 0; i < cars.length; i++){
		let allCars = document.getElementsByClassName(`car${i}`)
	};
}
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

CarLot.loadInventory(borderEvents);

return originalCarLot;

})(CarLot);