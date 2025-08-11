console.log("1. Arrays");

const foods = ["apple", "banana", "orange", "kiwi", "grape"];

foods.push("mango");
console.log(foods);

foods.shift();
console.log(foods);

foods.forEach((item) => {
    console.log(item);
});

console.log("2. Objects");

const person = {
    name: "Junido",
    age: 29,
    isCoder: true,
    skills: ["HTML", "CSS", "JS"]
};

person.country = "Indonesia";
console.log(person);

person.age = 30;
console.log(person);

for (let key in person) {
    console.log(person[key]);
}

console.log("3. Mini Task - Array of Objects");

const film = [
    {
        title: "The Shawshank Redemption",
        price: 10
    },
    {
        title: "The Godfather",
        price: 15
    },
    {
        title: "The Dark Knight",
        price: 20
    }
]

for (let i = 0; i < film.length; i++) {
    console.log(`Product: ${film[i].title}, Price: ${film[i].price}`);
}