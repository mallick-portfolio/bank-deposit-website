// DOM Selectioin
const depositBtn = document.getElementById('deposit')
const withdrawBtn = document.getElementById('withdraw')
const depositBalance = document.getElementById('deposit-balance');
const withdrawBalance = document.getElementById('withdraw-balance');
const netBalance = document.getElementById('net-balance');
let netMoney = netBalance.innerText;

depositBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const depositMoney = document.getElementById('deposit-money');

  if (isNaN(depositMoney.value) || depositMoney.value === '') {
    alert('please provide number of money');
    return false;
  } else {
    netBalance.innerHTML = parseFloat(netMoney) + parseFloat(depositMoney.value);
    depositBalance.innerHTML = parseFloat(depositMoney.value) + parseFloat(depositBalance.innerHTML);
    depositMoney.value = '';
  }
})

// WithDraw Money

withdrawBtn.addEventListener('click', (e) => {
  const withdrawMoney = document.getElementById('withdraw-money');
  if (isNaN(withdrawMoney.value) || withdrawMoney.value === '') {
    alert('please provide withdraw amount');
    return false;
  } else if (parseFloat(netBalance.innerText) < parseFloat(withdrawMoney.value)) {
    alert('Inseficient Balance');
    return false;
  } else {
    withdrawBalance.innerHTML = parseFloat(withdrawMoney.value) + parseFloat(withdrawBalance.innerHTML);
    netBalance.innerHTML = parseFloat(netBalance.innerText) - parseFloat(withdrawMoney.value);
    withdrawMoney.value = '';
  }
})