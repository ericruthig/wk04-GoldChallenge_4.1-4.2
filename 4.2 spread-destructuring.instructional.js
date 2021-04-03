/*
    - With the given shoppingList array, use array destructuring to assign each array within the shoppingList array
     its own variable. Then, reinitialize the shoppingList array so it is a single array containing all of the 
     values from the original array. 
    
    - after the shoppingList array has been reinitialized, using the array.prototype.map method, map over the newly 
    initialized shoppingList array. You should do the following within the map method:
        - include a parameter for index
        - utilize the array.prototype.push method to push the current value being mapped over into the appropriate 
        key/value pair in the obj variable
            - you will need to implement some sort of logic to check the index of the current item being mapped over.
*/

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS

let shoppingList = [[ 'eggs', 'milk', 'butter' ], [ 'cleaner', 'trash bags', 'detergent' ], 
[ 'thank you card', 'pens', 'gift wrapping' ], [ 'shoes', 't-shirt', 'slacks' ]];

const [grocery, cleaning, gifts, clothing] = shoppingList;
console.log('First ', grocery)

shoppingList = [...grocery, ...cleaning, ...gifts, ...clothing];
console.log('Grocery: ', grocery);
console.log('Cleaning: ', cleaning);
console.log('Gifts: ', gifts);
console.log('Clothing: ', clothing);
console.log('Shopping List:', shoppingList)

let obj = {
cleaning: [],
gifts: [],
clothing: [],
grocery: []
};

const arr = shoppingList;
const newList = arr.map((x, i) => {
    console.log(`value`,x, `index`, i);
    if (i >= 0 && x <= 2) {
        Array.prototype.push(grocery, obj.grocery);
    } else if (i >= 3 && x <= 5) {
        Array.prototype.push(cleaning, obj.cleaning);
    } else if (i >= 6 && x <= 8) {
        Array.prototype.push(gifts, obj.gifts);
     } else {
        Array.prototype.push(clothing, obj.clothing);
    }
    console.log(`Clothing:`, clothing); 
    console.log(`Gifts:`, gifts);
    console.log( `Cleaning:`, cleaning);
    console.log( `Grocery:`, grocery);
});

// console.log(`Clothing:`, obj.clothing); 
// console.log(`Gifts:`, obj.gifts);
// console.log( `Cleaning:`, obj.cleaning);
// console.log( `Grocery:`, obj.grocery);

