
function fuckyou() {
	console.log('yeah this shit works');
}

// Get the modal
let modal = document.getElementById("modal");

// Get the button that opens the modal
let btn = document.getElementById("task_button");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
	let input_button = document.getElementById('input_button');
	input_button.addEventListener('click', addTask);

function addTask() {
	let input = document.getElementById('input').value;
	if (input) {
		let task_template = "<div class='task_container'><p class='task_text'>" + input + "</p><div class='btn-container'><button class='edit_button action_button' onclick='editTask()'><img src='icons/pen_white.png'></button> <button class='delete_button action_button' onclick='deleteTask.call(this)'><img src='icons/trashcan_white_2.png'></button></div> </div>";
		document.getElementById('body_container').innerHTML += task_template;
		document.getElementById('input').value = "";
		modal.style.display = "none";
	}
}

function deleteTask() {
	this.closest('.task_container').remove();
}













