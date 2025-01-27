let timeAmount = 0;
let timeout;
let timeoutState = false;
let timerState = false;

function start() {
    if (timerState === false) {
            timeAmount = document.getElementById('inputbox').value;

        if (timeAmount != "") {
            // console.log(timeAmount);
            document.getElementById('time').innerHTML = timeAmount;

            const inputbox = document.getElementById('inputbox');
            inputbox.style.display = 'none';

            const timeelement = document.getElementById('time');
            timeelement.style.display = 'block';

            timeoutState = true;
            timerState = true;
            console.log('Start');

        setTimeout(removeOne, 1000);
        }
    }
}

function end() {
    if (timerState === true) {
    const inputbox = document.getElementById('inputbox');
    inputbox.style.display = 'flex';

    const timeelement = document.getElementById('time');
    timeelement.style.display = 'none';
    
    document.getElementById('inputbox').value = '';

    clearTimeout(timeout);
    timeoutState = false;
    timerState = false;
    console.log('Stop');
    }
}

function stop() {
    if (timerState != false) {
        if (timeoutState === true && timerState === true) {
            clearTimeout(timeout);
            timeoutState = false;
            console.log('Paused');
        } else {
            console.log('Unpaused');
            setTimeout(removeOne, 500);
        }
    }
}

function removeOne() {
    if (timeAmount > 0) {
        console.log(timeAmount);
        timeAmount--;
        document.getElementById('time').innerHTML = timeAmount;
        timeout = setTimeout(removeOne, 1000);
        timeoutState = true;
    } else { 
        alert('Aika loppui.')
        const inputbox = document.getElementById('inputbox');
        inputbox.style.display = 'flex';
        const timeelement = document.getElementById('time');
        timeelement.style.display = 'none';
     
        document.getElementById('inputbox').value = '';
        timeoutState = false;
        timerState = false;
        console.log('End');
    }
}
