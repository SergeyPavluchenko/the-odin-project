// === TASK 1 ===
/**Print every technology using forEach*/


const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

technologies.forEach(technology => {
    console.log(technology);
})
// === TASK 2 ===
/*Use map to create a new array with uppercase technology names.  */

const upperCaseTechnologies = technologies.map((technology) => technology.toUpperCase())
console.log(upperCaseTechnologies);

// === TASK 3 ===
/*Use filter to show only technologies longer than 4 characters*/

const longTechnologies = technologies.filter(technology => technology.length > 4)

console.log(longTechnologies);


// === TASK 4 ===
/**Use find to find JavaScript */

const javascript = technologies.find(technology => technology === 'JavaScript')
console.log(javascript);
