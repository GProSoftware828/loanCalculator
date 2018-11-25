document.getElementById('loan-form').addEventListener('submit', function(){
	document.getElementById('results').style.display = 'none';
	document.getElementById('loading').style.display = 'block';
	setTimeOut(calculateResults, 2000);
	e.preventDefault();
});

function calculateResults(e) {
	const UIamount = document.getElementById('amount');
	const UIinterest = document.getElementById('interest');
	const UIyears = document.getElementById('years');
	const UImonthlyPayment = document.getElementById('monthly-payment');
	const UItotalPayment = document.getElementById('total-payment');
	const UtotalInterest = document.getElementById('total-interest');

	const principal = parseFloat(amount.value);
	const calculatedInterest = parseFloat(interest.value) / 100 / 12;
	const calculatedPayment = parseFloat(years.value) * 12;

	//Monthly paym.
	const x = Math.pow(1 + calculatedInterest, calculatedPayments);
	const monthly = (principal*x*calculatedInterest)/(x-1);

	if(isFinite(monthly)){
		monthlyPayment.value = monthly.toFixed(2);
		totalPayment.value = (monthly * calculatedPayments).toFixed(2);
		totalInterest.value = ((monthly* calculatedPayments)-principal).toFixed(2);
		document.getElementById('results').style.display = 'block';
		document.getElementById('loading').style.display = 'none';
	} else {
		showError('Please check your numbers');
	}
}

function showError(error){
	document.getElementById('results').style.display = 'none';
	document.getElementById('loading').style.display = 'none';
	const errorDiv = document.createElement('div');
	const card = document.querySelector('.card');
	const heading = document.querySelector('.heading');
	errorDiv.className = 'alert alert-danger';
	errorDiv.appendChild(document.createTextNode(error));
	card.insertBefore(errorDiv, heading);
	setTimeOut(clearError, 3000);
}

function clearError() {
	document.querySelector('.alert').remove();
}