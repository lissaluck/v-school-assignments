var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"]; 

console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);

vegetables.pop(); /* 1 */

fruit.splice(0, 1); /* 2*/

fruit.indexOf("orange"); /* 3*/

fruit.push(fruit.indexOf("orange")); /* 4 */

vegetables.length; /* 5 */

vegetables.push(vegetables.length); /* 6 */

var food = fruit.concat(vegetables); /* 7 */

food.splice(4, 2); /* 8 */

food.reverse(); /* 9 */

console.log(food.toString()); /* 10 */