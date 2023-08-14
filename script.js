document.addEventListener("DOMContentLoaded", function () {
  const calculateEligibilityButton = document.getElementById(
    "submit"
  );
  const modal = document.getElementById("exampleModal");
  const modalContent = document.querySelector(".modal-body");
  const closeButton = document.querySelector(".close");

  calculateEligibilityButton.addEventListener("click", function () {
    const loanAmount = parseFloat(document.getElementById("exampleInputLoanAmount").value);
    const annualIncome = parseFloat(
      document.getElementById("exampleInputAnnualIncome").value
    );
    const age = calculateAge(new Date(document.getElementById("exampleInputDate").value));

    let eligibilityMessage = "";
    // age restriction
    if (age >= 18 && age <= 65) {
      if (annualIncome >= 30000) {
        if (loanAmount <= annualIncome * 0.5) {
          eligibilityMessage =
            "Congratulations! You are eligible for the loan.";
        } else {
          eligibilityMessage =
            "Sorry, the requested loan amount exceeds your eligibility.";
        }
      } else {
        eligibilityMessage =
          "Sorry, your annual income is too low for this loan.";
      }
    } else {
      eligibilityMessage = "Sorry, you are not eligible for a loan.";
    }

    modalContent.querySelector("#LoanAmntHelpInline").textContent =
      eligibilityMessage;
    modal.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  function calculateAge(birthDate) {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDateObj.getDate())
    ) {
      age--;
    }

    return age;
  }
});
