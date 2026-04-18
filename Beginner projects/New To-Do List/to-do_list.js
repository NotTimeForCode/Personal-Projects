
function fuckyou() {
	console.log('yeah this shit works');
}

// Get the modal
let modal = document.getElementById("modal");
let edit_modal = document.getElementById("edit_modal");

// Get the button that opens the modal
let btn = document.getElementById("task_button");
// let edit_btn = document.getElementsByClassName('edit_button')[0];

// Get the <span> element that closes the modal
let span = document.getElementById("close");
let edit_span = document.getElementById("close2");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

edit_span.onclick = function() {
	edit_modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == edit_modal) {
	edit_modal.style.display = "none";
  }
}

	let input_button = document.getElementById('input_button');
	input_button.addEventListener('click', addTask);

function addTask() {
	let input = document.getElementById('input').value;
	if (input) {
		let task_template = "<div class='task_container'><p class='task_text'>" + input + "</p><div class='btn-container'><button class='edit_button action_button' onclick='editTask.call(this)'><img src='icons/pen_white.png'></button> <button class='delete_button action_button' onclick='deleteTask.call(this)'><img src='icons/trashcan_white_2.png'></button></div> </div>";
		
		document.getElementById('body_container').innerHTML += task_template;
		document.getElementById('input').value = "";
		modal.style.display = "none";
	}
}

function editTask() {
	edit_modal.style.display = "block";
	let task_data = this.closest('.task_text').textContent;
	let modified_input = document.getElementById('modified_input');
	modified_input.value = task_data;
}

function saveTask() {
	
}

function deleteTask() {
	this.closest('.task_container').remove();
}







































































