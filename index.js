const API_URL = 'http://jsonplaceholder.typicode.com/';
const HTMLResponse = document.querySelector("#app");
const template;

fetch('${API_URL}/users') 
.then((response) =>response.json())
.then((users) =>{
    const tpl = users.map(user => '<li></li>')
});



