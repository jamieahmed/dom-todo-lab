// cached elements reference
const body = document.getElementById("myBody");
const mainTitle = document.getElementById("main-title");
const myInput = document.getElementById("myInput");
const subBtn = document.getElementById("submit-button");
const toDoList = document.getElementById("todo-list");

//added event listener

subBtn.addEventListener("click", function(evn) {
    const li = document.createElement("li"); // creating new list
    const input = document.querySelector("input");
    li.textContent = input.value;
    document.querySelector("ul").appendChild(li);
    input.value = ""; // to make empty input after input submited
});

toDoList.style.backgroundColor = "green";
toDoList.style.color = "red";
toDoList.style.listStyle = "none";
// body
body.style.textAlign = "center";
body.style.fontSize = "20px";
// main title
mainTitle.style.color = "red";
// my input
myInput.style.border = " 2px solid red";
myInput.style.color = "red";
// button
subBtn.style.color = "white";
subBtn.style.border = " 2px solid red";
subBtn.style.backgroundColor = "black";