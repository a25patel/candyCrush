var store1 = require('./store1-data.js');

// *********** ACCESSING DATA *********** \\

// Return the value '4.63' from store1
function accessesingData1(store1) {
  var value = '4.63';
  for (var key in store1) {
    for (var i = 0; i < store1[key].length; i++) {
      for (var j = 0; j < store1[key][i].length; j++) {
        if (store1[key][i][j] === value) {
          return value;
        }
      }
    }
  }
}


// Return how many 'Mint Wafers' were sold on January 6th
function accessesingData2(store1) {
  var date = store1['2015-01-06'];
  for (var i = 0; i < date.length; i++) {
    if (date[i][0] === 'Mint Wafers') {
      return date[i][2];
    }
  }
}
console.log(accessesingData2(store1) + ' Mint Wafers sold on Jan 06, 2015');


// *********** LOOPING OVER DATA *********** \\


// Create a loop to read which candies were sold by store1 on Jan 8. After simply outputting the data, try creating an array that contains the candy names.
function loopingData1(store1) {
  var date = store1['2015-01-08'];
  var candy = [];
  for (var i = 0; i < date.length; i++) {
    candy.push(date[i][0])
  }
  return candy;
}

console.log(loopingData1(store1));

// Create a loop to count the total number of candies sold on Jan 10 at store1. Where do you have to initialize the counter variable? Why?
function loopingData2(store1) {
  var date = store1['2015-01-10'];
  var count = 0;
  for (var i = 0; i < date.length; i++) {
    count += date[i][2];
  }
  return count;
}

console.log(loopingData2(store1));

// Use `Object.keys()` to get an array of the dates that candies were sold at store1.
function loopingData3(store1) {
  return Object.keys(store1);
}

console.log(loopingData3(store1));

// Use a loop to calculate the total number of candies sold at store1.
function loopingData4(store1) {
  var count = 0;
  for (var key in store1) {
    for (var i = 0; i < store1[key].length; i++) {
      count +=  store1[key][i][2];
    }
  }
  return count;
}

console.log(loopingData4(store1));

// In the previous exercise, where did you have to initialize the counter variable? Why?
function loopingData5(store1) {
  return 'Answer';
}

// *********** CHALLENGE *********** \\

// Calculate the total revenue of the candies sold by store1 on January 10th.
// Be sure to return a number! Example `14.55`
function challenge1(store1) {
  var date = store1['2015-01-10'];
  var totalRevenue = 0;
  for (var i = 0; i < date.length; i++) {
    var quantity = date[i][2];
    var price = parseFloat(date[i][1]);
    totalRevenue += (price * quantity);
  }
  return totalRevenue.toFixed(2);
}
console.log(challenge1(store1));

module.exports = {
  accessesingData1,
  accessesingData2,
  loopingData1,
  loopingData2,
  loopingData3,
  loopingData4,
  loopingData5,
  challenge1
}; 
