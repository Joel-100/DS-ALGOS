// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
// Update the current existing inventory item quantities (in arr1). If an item cannot be found, 
// add the new item and quantity into the inventory array. The returned inventory array should 
// be in alphabetical order by item.

// Inputs - inventory = [['beans', 10],['maize', 13],['rice', 7]] - item, quantity and name
// Fresh devlivery = [['juice', 1],['beans', 7],['milk', 11], ['rice', 19]]

// Output = [['beans', 17], ['maize',13], ['rice',26], ['juice',1], ['milk', 11]]

// create a new function
function compareUpdateInventory(invArr, itemsArr) {

  // Loop through the items
  for (let i = 0; i < itemsArr.length; i++) {
    // Declare a found flag
    let found = false;
    // console.log(invArr[i]);
    // Loop through the inventory array
    for (let j = 0; j < invArr.length; j++) {
      // If items exists in both, update the quantity in the inventory
      if (itemsArr[i][0] === invArr[j][0]) {
        invArr[i][1] += itemsArr[j][1];
        // Change flag
        found = true;
        break;
        // console.log(invArr[i]);
      }
    }

    // If ites does not exist in the inventory, add the new item and quantity into inventory
    if (!found) {
      invArr.push(itemsArr[i]);
    }
  }
  // Return the new inventory array
  return(invArr.sort());
}


let inventory = [['beans', 10], ['maize', 13], ['rice', 7]]
let items = [['juice', 1], ['beans', 7], ['milk', 11], ['rice', 19]]
console.log(compareUpdateInventory(inventory, items))