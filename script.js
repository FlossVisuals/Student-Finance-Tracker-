const form = document.getElementById("financeForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  
  alert("Transaction submitted successfully!");
});