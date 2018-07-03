var store4 = require('./store4-data.js');

// ^^^^^^^^^^^^ ACCESSING DATA ^^^^^^^^^^^^
// Return the cost of 'Dark Chocolate Crunchies' from store4
function accessesingData1(data) {
  return store4['Dark Chocolate Crunchies']['cost'];
}

console.log(accessesingData1(store4));

// Return the total number of 'Berry Bites' sold by store4
function accessesingData2(data) {
  return store4['Berry Bites']['sold on'].length;
}
console.log(accessesingData2(store4));

// ^^^^^^^^^^^^ LOOPING OVER DATA ^^^^^^^^^^^^
// Create a loop to return an array of the candy names that cost more than $2.00
function loopingData1(data) {
  var arr = [];
  for (var key in data) {
    if (data[key]['cost'] > 2.00) {
      arr.push(key);
    }
  }
  return arr;
}
console.log(loopingData1(store4));

// Create a loop to return an object that has the candy name as the key and the cost as the value
function loopingData2(data) {
  var obj = {};
  for (var key in data) {
    obj[key] = data[key]['cost'];
  }
  return obj;
}
console.log(loopingData2(store4));


// ^^^^^^^^^^^^ CHALLENGE ^^^^^^^^^^^^
// Calculate how much money store4 made selling Peppermint Poppers. What about Caramel Twists? Each date represents 1 item sold. Round revenue to two decimal points.
// Return your answer as an array: `[total1, total2]`
function challenge1(data) {
  var ppCost = store4['Peppermint Poppers']['cost'];
  var ppQuantity = store4['Peppermint Poppers']['sold on'].length;
  var ctCost = store4['Caramel Twists']['cost'];
  var ctQuantity = store4['Caramel Twists']['sold on'].length;
  var arr = [];
  arr.push((ppCost * ppQuantity).toFixed(2));
  arr.push((ctCost * ctQuantity).toFixed(2));
  return arr;
}
console.log(challenge1(store4));

// Calculate and return how much money store4 made on January 9th. Round to two decimal points.
function challenge2(store4) {
  var total = 0;
  for (var key in store4) {
    var count = 0;
    for (var i = 0; i < store4[key]['sold on'].length; i++) {
      if (store4[key]['sold on'][i] === '2015-01-09') {
        count ++;
      }
    }
  total += count * (store4[key]['cost']);
  }
return total.toFixed(2);
}
console.log(challenge2(store4));
// Calculate and return how much store4 made from selling Dark Chocolate Crunchies across all the days. Round to two decimal points.
function challenge3(data) {
  var dccCost = store4['Dark Chocolate Crunchies']['cost'];
  var dccQuantity = store4['Dark Chocolate Crunchies']['sold on'].length;
  var total = dccCost * dccQuantity;
  return total.toFixed(2);
}
console.log(challenge3(store4));

module.exports = {
  accessesingData1,
  accessesingData2,
  loopingData1,
  loopingData2,
  challenge1,
  challenge2,
  challenge3,
}
