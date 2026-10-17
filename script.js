// Get the form 
const form = document.getElementById("financeForm");

// Get the summary disaplys
const incomeDisplay = document.getElementById("income");
const expensesDisplay = document.getElementById("expenses");
const balanceDisplay = document.getElementById("balance");

// Get the transaction list 
const transactionList = document.getElementById("transactionList");

// Starting totals
let totalIncome = 0;
let totalExpenses = 0;

// Listen for form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();
  
  // Get the user's input
  const description = document.getElementById("description").value.trim();
  const amount = Number (document.getElementById("amount").value);
  const type = document.getElementById("type").value;
  
  // Check the input
  if (description === "" || !Number.isFinite(amount) || amount <= 0) {
    alert("Please enter a valid description and amount.");
    return;
  }
  
  // Calculate income and expenses
  if (type === "income") {
    totalIncome += amount;
  } else {
    totalExpenses += amount;
  }
 
 // Calculate the balance
 const balance = totalIncome - totalExpenses;
 
 // Update the financial summary 
  incomeDisplay.textContent = totalIncome.toLocaleString("en-NG");
  expensesDisplay.textContent = totalExpenses.toLocaleString("en-NG");
  balanceDisplay.textContent = balance.toLocaleString("en-NG");
  
  // Remove the empty messages
  if (transactionList.textContent === "No transactions yet.") {
    transactionList.innerHTML ="";
  }
  
  // Create a new transaction
  const item = document.createElement("li");
  
  item.textContent = 
    description + " _ " +
    (type === "income" ? "Income: " : "Expenses: ") + "\u20A6" + amount.toLocaleString("en-NG");
    
    // Add the transaction to the page
    transactionList.appendChild(item);
    
    // Clear the form
    financeForm.reset();
    
    // Show the confirmation
    alert("Transaction submitted successfully!");
});