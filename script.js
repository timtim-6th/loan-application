document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loanForm");
  const responseMessage = document.getElementById("response");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const desiredLoanAmount = parseFloat(
      document.getElementById("exampleInputLoanAmount").value
    );
    const annualIncome = parseFloat(
      document.getElementById("exampleInputAnnualIncome").value
    );

    if (isNaN(desiredLoanAmount) || isNaN(annualIncome)) {
      responseMessage.textContent =
        "Please fill in valid numbers for both desired loan amount and annual income.";
    } else if (annualIncome >= desiredLoanAmount) {
      responseMessage.textContent =
        "Congratulations! You are eligible for the loan.";
    } else {
      responseMessage.textContent = "Sorry, you are not eligible for the loan.";
    }

    // Show the modal with the response
    const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
    modal.show();
  });
});
