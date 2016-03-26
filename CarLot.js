"use script"

let CarLot = (function (originalCarLot) {
  
  originalCarLot.getIntentory = function () {
    let intentory = [];
    intentory = JSON.parse(this.responseText);

    originalCarLot.inventoryToDom(inventory.cars);
  },
      	
  // make a request to call the JSON file
    originalCarLot.loadInventory = function (callback) {
      let inventoryLoader = new XMLHttpRequest ();

      inventoryLoader.addEventListener("load", callback);
      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();
    };
      	// Invoke the callback function so the caller knows
      	callback(inventory);
    return originalCarLot

})();