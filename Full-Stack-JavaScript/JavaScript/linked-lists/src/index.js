import LinkedList from "./LinkedList.js";


const emptyList = new LinkedList()
const list = new LinkedList()
list.append(10);
list.append(20);
list.append(30);
list.append(40);

list.prepend(5)

console.log(list);
console.log(list.head);
console.log(list.head.value);
console.log(list.head.nextNode.value);
console.log(list.head.nextNode.nextNode.value);
console.log(list.head.nextNode.nextNode.nextNode.value);
console.log(list.head.nextNode.nextNode.nextNode.nextNode.value);

console.log(list.size());


console.log(emptyList.tail());
console.log(list.tail().value);

console.log(list.at(0).value);
console.log(list.at(2).value);
console.log(list.at(4).value);
console.log(list.at(10));



console.log("До pop:", list.tail().value);

list.pop();

console.log("Після pop:", list.tail().value);
console.log("Розмір списку:", list.size());

console.log(list.contains(20));
console.log(list.contains(99));
console.log(emptyList.contains(5));

console.log(list.find(5));
console.log(list.find(20));
console.log(list.find(30));
console.log(list.find(99));

list.removeAt(1);

console.log(list.toString());

list.insertAt(2, 15);

console.log(list.toString());


