



const REGULAR_HOURS = 40;
const OT_MULIPLIER = 1.5;


const calculate_btn = document.getElementById("calculate-btn");
calculate_btn.addEventListener('click', function (e) {
    e.preventDefault()
    const hours = parseFloat(document.getElementById('hours').value);
    const payRate = parseFloat(document.getElementById('pay-rate').value);
    let grossPay;

    if (isNaN(hours) || isNaN(payRate)) {
        alert("Please enter valid numbers for both hours and pay rate.");
        return;
    }

    if (hours > REGULAR_HOURS){
        const overtimeHour = hours - REGULAR_HOURS;
        const overtimePay = overtimeHour * payRate * OT_MULIPLIER;
        grossPay = REGULAR_HOURS * payRate + overtimePay;
    }else{
        grossPay = hours * payRate;
    }

 const result = document.querySelector('.result');
 result.textContent = `Your Gross Pay is $${grossPay.toFixed(2)}`;

 document.getElementById('hours').value = '';
 document.getElementById('pay-rate').value = '';

})