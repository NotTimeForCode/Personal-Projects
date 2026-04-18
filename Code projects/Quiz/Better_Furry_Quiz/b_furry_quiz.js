
function getInput() {
	let furryness = 0;
	
	let slider_1_data = 0;
	let slider_1 = document.getElementById("slider_1");
	slider_1_data = slider_1.value;
	
	let slider_2_data = 0;
	let slider_2 = document.getElementById("slider_2");
	slider_2_data = slider_2.value;

	let slider_3_data = 0;
	let slider_3 = document.getElementById("slider_3");
	slider_3_data = slider_3.value;
	
	furryness = Number(slider_1_data) + Number(slider_2_data) + Number(slider_3_data);
	let response_1;
	let response_2;
	console.log(furryness);
	
	if (furryness === 30) {
		response_1 = "Yeah, you're a furry.";
		response_2 = "I have your IP address...<br> you fucking furry.";
	} else if (furryness >= 25 && furryness <= 29) {
		response_1 = "You're probably a furry.";
		response_2 = "You disgust me.";
	} else if (furryness >= 20 && furryness <= 24) {
		response_1 = "'A lot of furryness in you I see'- Yoda.";
		response_2 = "Order 66: Purge all furries.";
	} else if (furryness >= 15 && furryness <= 19) {
		response_1 = "A decent likelyhood of being a furry.";
		response_2 = "You're more furry than you're not.";
	} else if (furryness >= 10 && furryness <= 14) {
		response_1 = "Could be a furry.";
		response_2 = "Not definitive though.";
	} else if (furryness >= 7 && furryness <= 9) {
		response_1 = "Not a lot of furryness";
		response_2 = '"Press X to doubt."';
	} else if (furryness >= 4 && furryness <= 6) {
		response_1 = "Only slight furryness.";
		response_2 = "Probably lying, but we don't judge";
	} else if (furryness === 3) {
		response_1 = "you're apparently 0% furry.";
		response_2 = "Ok, now you're just fucking lying.";
	}
	if (response_1 && response_2) {
	document.getElementById('result_1').innerHTML = response_1;
	document.getElementById('result_2').innerHTML = response_2;
	} else {
	document.getElementById('result_1').innerHTML = 'yeah this shit aint working';
	}


}
