/*Tasks:
1. Print the user name.
2. Print the user role.
3. Print all skills.
4. Add a new skill.
5. Create a function that prints a user summary.
*/

const user = {
  name: "Serhii",
  role: "Junior Developer",
  skills: ["HTML", "CSS", "JavaScript"],
  isLearning: true,
};

console.log(user.name);
console.log(user.role);
console.log(user.skills);
console.log(user.isLearning);

user.skills.push("React");
console.log(user.skills);

const createUserSummary = (user) => {
  return `${user.name} is ${user.role}. Skills: ${user.skills.join(", ")}.`;
};
console.log(createUserSummary(user));
