function subtract(a, b) {
    return a - b;
}


function createUser(name, age) {
    return {
        name: name,
        age: age,
    }
}

function getFruits() {
    return ['apple', 'banana', 'orange']
}

function getUserName(user) {
    return user.name;
}

function isEmpty() {
    return false;
}

function findUser() {
    return null
}

function getUserName1(user) {
    return user.name;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Не можна ділити на нуль');
    }

    return a / b;
}

function isAdult(age) {
    return age >= 18
}

module.exports = { isAdult, divide, subtract, createUser, getFruits, getUserName, isEmpty, findUser, getUserName1 }
