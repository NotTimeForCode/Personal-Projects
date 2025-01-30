let userInput;
let testvariable = 'bitchboy';
let increment = 1;


function addTask() {
    let userInput = document.getElementById('taskInput').value;
    if (userInput) {
    idIncrement();
    console.log(increment);
    let item = `<div id="${increment}">
            <div id="row">
            <button onclick="button()" id="task-container">
            <p id="userInput">${userInput}</p>
            <button onclick="deleteTask(${increment})" id="deleteBtn">Poista</button>
            </button>
            </div>
            </div>`;
    document.getElementById('tasks').innerHTML += item;
    //document.getElementById('taskInput').value = '';
    }

}

function idIncrement() {
    increment++;
    return increment;
}

function deleteTask(idNumber) {
    document.getElementById(idNumber).remove();

}

function button() {
    console.log('button');
}