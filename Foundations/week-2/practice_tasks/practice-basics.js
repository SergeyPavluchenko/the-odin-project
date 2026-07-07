const name = 'Serhii';
let age = 35;
const city = 'Zolotonosha';
const role = 'web developer';
const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

function createProfile() {
    return `My name is ${name}. I am ${age} years old. I live in ${city}. I want to become a ${role}`
};

console.log(createProfile());