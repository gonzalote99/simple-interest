function showMessage() {
  document.getElementById('result').style.display = "block";
}

function compute() {
  var principal = document.getElementById('principal').value;
  if(parseInt(principal ) < 1) {
     alert('enter positive number')
     document.getElementById('principal').focus();
     return;
  }

  var rate = document.getElementById('rate').value;
  var years = document.getElementById('years').value;

  var interet = principal * rate * years / 100;


  var today = new Date();
  var yearOfWithdrawl = parseInt(today.getFullYear())+parseInt(years);

  document.getElementById('depositmessage').innerHTML = ""+principal;
  document.getElementById('interestmessage').innerHTML = ""+rate;
  document.getElementById('amountmessage').innerHTML = ""+interet;
  document.getElementById('yearmessage').innerHTML = ""+yearOfWithdrawl;

  showMessage();

  return false;
}



function showRange() {
  var rate = document.getElementById('rate').value;
  document.getElementById('ratevalue').innerHTML = rate;
} 