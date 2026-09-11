
const content = document.querySelector('#content')
console.log(content);

fetch("https://jsonplaceholder.typicode.com/users/1").then((resp) => {
    if (!resp.ok) {
        throw new Error('new error')
    }
    console.log(resp.json);
    return resp.json()
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})