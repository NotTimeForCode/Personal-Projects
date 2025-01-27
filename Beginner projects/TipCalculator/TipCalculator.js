let bill = 0;
let tip = 0;

function calculation() {
    let bill = parseFloat(document.getElementById('billAmount').value);
    let tip = parseFloat(document.getElementById('percent').value);
    console.log(bill);
    console.log(tip);

    if (isNaN(bill) || isNaN(tip)) {
        document.getElementById('total').innerHTML = 'Total: <strong>0</strong>';
    } else {
    tip = tip / 100;
    tip = tip * bill;
    let total = tip + bill;

    document.getElementById('total').innerHTML = `Total: <strong>${total}</strong>`;
    }

}