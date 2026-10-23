import LinkedList from "./LinkedList.js";

const list = new LinkedList()
list.append(10);
list.append(20);
list.append(30);
list.append(40);

console.log(list);
console.log(list.head);
console.log(list.head.value);
console.log(list.head.nextNode.value);
console.log(list.head.nextNode.nextNode.value);
console.log(list.head.nextNode.nextNode.nextNode.value);  
