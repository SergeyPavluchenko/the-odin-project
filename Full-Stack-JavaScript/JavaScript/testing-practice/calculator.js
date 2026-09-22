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

module.exports = { subtract, createUser, getFruits, getUserName, isEmpty, findUser, getUserName1 }
