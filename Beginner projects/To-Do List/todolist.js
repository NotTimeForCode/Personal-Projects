let userInput;
let testvariable = 'bitchboy';


function addTask() {
    let userInput = document.getElementById('taskInput').value;
    if (userInput) {
    let item = `<div id="task-container">
            <p id="userInput">${userInput}</p>
            <button onclick="deleteTask" id="deleteBtn">Poista</button>
            </div>`;
    document.getElementById('tasks').innerHTML += item;
    document.getElementById('taskInput').innerHTML = '';
    }

}

function deleteTask() {

}