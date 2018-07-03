var store2 = require('./store2-data.js');

/////////// ACCESSING DATA ///////////

// Set the sale dates for 'Banana Bunches' from store2 to a variable, then return that variable
function accessesingData1(store2) {
  var dates = store2['sale dates']['Banana Bunches'];
  return dates;
}

  console.log(accessesingData1(store2));

// Using a built-in array property return the total sale dates there are for store2's 'Banana Bunches'
function accessesingData2(store2) {
  return accessesingData1(store2).length;
}

console.log(accessesingData2(store2));

/////////// UPDATING DATA ///////////
// Set a variable to equal the prices of the 'Mint Wafers' in store2. Then reassign it to a new value. When you update your new variable, does the price in the store2 data change? Return your answer as a boolean and write a comment on why or why not.
function updatingData1(store2) {
  var price = store2['inventory prices']['Mint Wafers'];
  store2['inventory prices']['Mint Wafers'] = '4.09';
  return price;
};

console.log(updatingData1(store2));

// Set a variable equal to the 'Caramel Twists' sale dates in store2. Use pop to remove one of the sale dates for store2's 'Caramel Twists'. Does your variables value match up with what is in store2? Return your answer as a boolean and write a comment on why or why not.
function updatingData2(store2) {
  var dates = store2['sale dates']['Caramel Twists'];
  return dates.pop();
}

console.log(updatingData2(store2));

/////////// LOOPING OVER DATA ///////////

// Iterate over the store2 sale dates for 'Caramel Twists'. Use this to create an object containing dates as the key and the value as the quantity sold on that day.
// Example:
// {
//   '2015-01-06': 4,
//   '2015-01-07': 3,
// }
function loopingData1(store2) {
  var dates = store2['sale dates']['Caramel Twists'];
  var objDates = {};
  for (var i = 0; i < dates.length; i++) {
    var count = 0;
    for (var j = 0; j < dates.length; j++) {
      if (dates[i] === dates[j]) {
        count ++;
      }
    }
    if (count > 0) {
      objDates[dates[i]] = count;
    }
  }
  return objDates;
}

console.log(loopingData1(store2));
// Iterate over store2's sale dates data to find which day had the most total number of sales. Return the date with the most sales.
function loopingData2() {
  // Variables Made
  var dates = store2['sale dates'];
  var objDates = {};
  var arr = Object.keys(dates);
  var newDates = [];
  // Create one long array of all dates
  for (var i = 0; i < arr.length; i++) {
    newDates = newDates.concat(dates[arr[i]]);
  }
  // iterate through long array creating an object of date:count
  for (var i = 0; i < newDates.length; i++) {
    var count = 0;
    for (var j = 0; j < newDates.length; j++) {
      if (newDates[i] === newDates[j]) {
        count ++;
      }
    }
    if (count > 0) {
      objDates[newDates[i]] = count;
    }
  }
  // find date with largest count
  var value = 0;
  for (var key in objDates) {
    if (objDates[key] > value) {
      value = objDates[key];
    }
  }
  // return the date with the largest count
  for (var key in objDates) {
    if (value === objDates[key]) {
      return key;
    }
  }
}

console.log(loopingData2(store2));
/////////// CHALLENGE ///////////
// Create and return an object containing the amounts that store2 made by selling each type of candy. Round each number to 2 decimal points.
// Example:
// {
//   'Caramel Twists': 14.15,
//   'Peppermint Poppers': 20.51
// }
// 1. find length of sales dates of each candy
// 2. multiple length by price of candy
// 3. insert candy name and total price into obj
function challenge1(store2) {
  var finalObj = {};

}


// module.exports = {
//   accessesingData1,
  // accessesingData2,
  // updatingData1,
  // updatingData2,
  // loopingData1,
  // loopingData2,
  // challenge1
// }
