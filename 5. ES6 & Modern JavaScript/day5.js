console.log("1. Arrow Functions");

const square = (a) => a * a
console.log(square(5));

const add = (a, b) => a + b
console.log(add(4, 5));

console.log("2. Template Literals");

const a = 5;
const b = 6;
const sentence = `The sum of ${a} and ${b} is ${a + b}.`
console.log(sentence);

console.log("3. Destructuring");

const fruitArr = ["apple", "banana", "orange", "mango"];
const [apple, banana, orange, mango] = fruitArr;
console.log(apple);
console.log(orange);

const personObj = {name: "Junido", age: 29, isCoder: true, skills: ["HTML", "CSS", "JS"]};
const {name, age, isCoder, skills} = personObj;
console.log(name);
console.log(skills);

console.log("4. Spread Operator");

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

console.log("5. Rest Parameter");

function multiplies(...nums) {
    let result = 1;
    for (let num of nums) {
        result *= num;
    }
    return result;
}
console.log(multiplies(1, 2, 3, 4, 5));