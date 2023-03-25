const list = document.getElementsByClassName("list1");
const events = ["click", "submit", "login", "input", "keyup"];

const markup = events.map((item) => {
    return `<ul> <li class="item2">${item}</li></ul>`;
}).join(" ");

console.log('markup', markup)
list.insertAdjacentHTML("beforeend", markup);