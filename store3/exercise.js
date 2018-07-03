var store3 = require('./store3-data.js');
// Return Berry Bites data for store3 on January 7.
function accessesingData1(store3) {
  var date = store3[1]['date'];
  var inventory = store3[1]['inventory sold'];
  return inventory['Berry Bites'];
}
console.log(accessesingData1(store3));

// Return how many Mint Wafers were sold on January 9th
function accessesingData2() {
  var date = store3[3]['date'];
  var quantity = store3[3]['inventory sold']['Mint Wafers']['quantity'];
  return quantity;
}
console.log(accessesingData2(store3));

// Return total number of dates included in the dataset.
function accessesingData3(store3) {
  return store3.length;
}
console.log(accessesingData3(store3));

// Create a loop to iterate over the sale data from store3. Use this loop to return an array of dates contained in the sale data.
function loopingData1(store3) {
  var arr = [];
  for (var i = 0; i < store3.length; i++) {
    arr.push(store3[i]['date']);
  }
  return arr;
}
console.log(loopingData1(store3));

// Use `Object.keys()` to loop over the inventory sold for January 10th in store3. While iterating over the data, create an object containing each candy's name and price. Return the result.
// Example:
// {
//   'Dark Chocolate Crunchies': 1.30,
//   'Mint Wafers': 1.40,
//   ...
// }
function loopingData2(store3) {
  var obj = {};
  var arr = Object.keys(store3[4]['inventory sold']);
  for (var i = 0; i < arr.length; i++) {
    obj[arr[i]] = store3[4]['inventory sold'][arr[i]]['cost'];
  }
  return obj;
}
console.log(loopingData2(store3));

// Create a loop to iterate over the whole store3 variable to find out how many Peanut Butter Buttered Peanuts were sold over all dates. Return the result.
function loopingData3(store3) {
  var count = 0;
  for (var i = 0; i < store3.length; i++) {
    count += store3[i]['inventory sold']['Peanut Butter Buttered Peanuts']['quantity'];
  }
  return count;
}
console.log(loopingData3(store3));

// Determine how much money store3 made on January 9th and return the result fixed to two decimal points
function challenge1(store3) {
  var total = 0;
  var obj = store3[3]['inventory sold'];
  for (var key in obj ) {
    var pieceTotal = obj[key]['cost'] * obj[key]['quantity'];
    total += pieceTotal;
  }
  return total.toFixed(2);
}
console.log(challenge1(store3));
