function createAccount(pin, amount = 0) {
  let currentPin = pin;
  let balance = amount;
  
  return {
    checkBalance: (pinEntry) => {
      if (pinEntry !== currentPin) {
        return "Invalid PIN.";
      }
      return `$${balance}`;
    },
    deposit: (pinEntry, depositbalance) => {
      if (pinEntry !== currentPin) {
        return "Invalid PIN.";
      }
      balance += depositbalance;
      return `Successfully deposited $${depositbalance}. Current balance: $${balance}.`;
    },
    withdraw: (pinEntry, withdrawalbalance) => {
      if (pinEntry !== currentPin) {
        return "Invalid PIN.";
      }
      if (withdrawalbalance > balance) {
        return "Withdrawal amount exceeds account balance. Transaction cancelled.";
      }
      balance -= withdrawalbalance;
      return `Successfully withdrew $${withdrawalbalance}. Current balance: $${balance}.`;
    },
    changePin: (pinEntry, newPin) => {
      if (pinEntry !== currentPin) {
        return "Invalid PIN.";
      }
      currentPin = newPin;
      return "PIN successfully changed!";
    }
  }
}

module.exports = { createAccount };
