let count = 0;
//let increase_button = document.getElementById('increase_btn').innerHTML;
//let reset_button = document.getElementById('reset_btn').innerHTML;
//let decrease_button = document.getElementById('decrease_btn').innerHTML;

//increase_button.addEventListener('click', Increase);
//decrease_button.addEventListener('click', Decrease);
//reset_button.addEventListener('click', Reset);

function Increase() {
	count++;
	document.getElementById('num').innerHTML = count;
}

function Decrease() {
	if (count >= 1) {
		count--;
	document.getElementById('num').innerHTML = count;
	} else if (count <= 0) {
		count = 0;
	document.getElementById('num').innerHTML = count;
	}
}

function Reset() {
	count = 0;
	document.getElementById('num').innerHTML = count;
}
