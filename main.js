const account = {
  ccNumber: "1234567890123456",
  cvv: "123",
  balance: 1000 // balance
};

function checkBalance() {
  const enteredCCNumber = document.getElementById("ccNumber").value;
  const enteredCVV = document.getElementById("cvv").value;
  const balanceElement = document.getElementById("balance");
  const errorElement = document.getElementById("error");

  balanceElement.innerText = "";
  errorElement.innerText = "";

  if (enteredCCNumber === account.ccNumber && enteredCVV === account.cvv) {
      balanceElement.innerText = "Your balance is: $" + account.balance;
  } else {
      errorElement.innerText = "Invalid credit card number or CVV. Please try again.";
  }
}

function serviceCallWrapper(serviceFunction) {
  const enteredCCNumber = document.getElementById("ccNumber").value;
  const enteredCVV = document.getElementById("cvv").value;
  const errorElement = document.getElementById("error");

  errorElement.innerText = "";

  if (enteredCCNumber === account.ccNumber && enteredCVV === account.cvv) {
      setTimeout(() => {
          serviceFunction();
      }, 3000);
  } else {
      errorElement.innerText = "Invalid credit card number or CVV. Please try again.";
  }
}

function withdraw() {
  let withdrawalAmount = prompt("Enter withdrawal amount:");
  const balanceElement = document.getElementById("balance");
  const errorElement = document.getElementById("error");

  balanceElement.innerText = "";
  errorElement.innerText = "";

  if (withdrawalAmount !== null && !isNaN(withdrawalAmount)) {
      withdrawalAmount = parseFloat(withdrawalAmount);

      if (withdrawalAmount > 0 && withdrawalAmount <= account.balance) {
          account.balance -= withdrawalAmount;
          balanceElement.innerText = "Your balance is: $" + account.balance;
          alert("Withdrawal successful. Remaining balance: $" + account.balance);
      } else if (withdrawalAmount > account.balance) {
          errorElement.innerText = "Insufficient funds!";
      } else {
          errorElement.innerText = "Invalid withdrawal amount. Please enter avalid amount.";
      }
  } else {
      errorElement.innerText = "Invalid input. Please enter a valid amount.";
  }
}

function deposit() {
  let depositAmount = prompt("Enter deposit amount:");
  const balanceElement = document.getElementById("balance");
  const errorElement = document.getElementById("error");

  balanceElement.innerText = "";
  errorElement.innerText = "";

  if (depositAmount !== null && !isNaN(depositAmount) && depositAmount >= 10000) { 
      depositAmount = parseFloat(depositAmount);

      if (depositAmount > 0) {
          account.balance += depositAmount;
          balanceElement.innerText = "Your balance is: $" + account.balance;
          alert("Deposit successful. Updated balance: $" + account.balance);
      } else {
          errorElement.innerText = "Invalid deposit amount. Please enter a valid amount.";
      }
  } else {
      errorElement.innerText = "Invalid input. Please enter a valid amount.";
  }
}