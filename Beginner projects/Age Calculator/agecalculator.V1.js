const date = new Date();
let year = date.getFullYear();


function Calculation() {
    let birthDate = document.getElementById('birthday').value;
        console.log(birthDate);

    let dateSliced = birthDate.toString().slice(0, -6);
    
    let month = birthDate.toString().slice(5, -3);

    let firstChar = month.charAt(0);

    let total = year - dateSliced;

        console.log(total);

    document.getElementById('result').innerHTML = `You are ${total} years old.`;
}