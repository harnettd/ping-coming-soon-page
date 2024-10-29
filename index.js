const formBlock = "flex-signup-form";
const emailInput = document.querySelector(`.${formBlock}__email-input`);
const errMsg = document.querySelector(`.${formBlock}__err-msg`);
const submitBtn = document.querySelector(`.${formBlock}__submit-btn`);

// When the webpage loads, clear the value of emailInput and deactivate error
// indicators.
emailInput.value = "";
emailInput.classList.remove(`${formBlock}__email-input--on-err`);
errMsg.classList.remove(`${formBlock}__err-msg--on-err`);

// Return true if email is valid and false otherwise.
const isValidEmail = (email) => {
  const re = /^\w+(\.\w+)*@\w+(\.\w+)*$/;
  return re.test(email);
};

// When the Submit button is clicked, checker whether or not emailInput
// contained a valid email address. Activate or deactivate error
// indicators accordingly.
submitBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  email = emailInput.value;
  if (isValidEmail(email)) {
    console.log(`${email} is a valid email address`);
    emailInput.classList.remove(`${formBlock}__email-input--on-err`);
    errMsg.classList.remove(`${formBlock}__err-msg--on-err`);
  } else {
    console.log(`${email} is not a valid email address`);
    emailInput.classList.add(`${formBlock}__email-input--on-err`);
    errMsg.classList.add(`${formBlock}__err-msg--on-err`);
  }
});
