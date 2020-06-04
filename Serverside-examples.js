/* const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(stations) {
  const selectedStations = [];
  
  for (const station of stations) {
    const capacity = station[1];
    
    if (capacity >= 20) {
      const location = station[2];
      
      if (location === "community centre" || location === "school") {
        selectedStations.push(station[0]);
      }
      
    }
  }
  
  return selectedStations;
}

console.log(chooseStations(stations));
*/


/*
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];  

const finalPosition = function (moves) {
  const answer = [];
  let y = 0;
  let x = 0;
  for (let move of moves) {
    if (move === "north") {
      y = y + 1;
    } else if (move === "south") {
      y = y - 1;
    } else if (move === "west") {
      x = x - 1;
    } else if (move === "east") {
      x = x + 1;
    }
  }
  answer.push(x);
  answer.push(y);
  
  return answer;
}
console.log(finalPosition(moves));

let name = "";
let yearOfBirth;
let currentYear;

function ageCalculator (name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;
  let string = (name + " is " + age + " years old.");
  return string;
}

console.log(ageCalculator("Maria", 1994, 2020));

let bottles;
function howManyHundreds(bottles) {
  let containers = bottles/100;
  containers = Math.floor(containers);
  return containers;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);

*/
let length;
let width;
let base;
let height;
let radius;

function calculateRectangleArea(length, width) {
  let rectangle = length * width
  if (rectangle > 0) {
    return rectangle;
  } else {
    return undefined;
  }
}

function calculateTriangleArea (base, height) {
  let triangle = (base * height) / 2;
  if (triangle > 0) {
    return triangle;
  } else {
    return undefined;
  }
}

function calculateCircleArea (radius) {
  let circle = Math.PI * radius * radius;

  if (circle > 0 && radius > 0) {
    return circle;
  } else {
    return undefined;
  }
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined


