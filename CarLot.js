"use strict"

var CarLot = (function () {
  let inventory = [];
  let id = 4;
  
  return {
   getInventory: function () {

   },
    loadInventory: function (callback) {
      let inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();
      inventoryLoader.addEventListener("load", function () {
        inventory = JSON.parse(this.responseText).cars;
        // Invoke the callback function so the caller knows
        callback(inventory);
      })
    }
  }

})();