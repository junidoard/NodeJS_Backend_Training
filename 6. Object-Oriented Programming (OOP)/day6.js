class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    study() {
        console.log(`Student ${this.name} is studying for grade ${this.grade}.`);
    }
}

class BankAccount {
    #balance = 0;

    constructor(balance) {
        this.#balance = balance;
    }
    deposit(amount) {
        this.#balance += amount;
    }
    withdraw(amount) {
        if (amount > this.#balance) {
            console.log("Insufficient funds.");
        } else {
            this.#balance -= amount;
        }
    }
    getBalance() {
        return this.#balance;
    }
}

const sarah = new Student("Sarah", 20, "A");
sarah.introduce();
sarah.study();

const albert = new Student("Albert", 20, "B");
albert.introduce();
albert.study();

const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance());