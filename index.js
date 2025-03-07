// Return a class name in the BEM convention.
const BEM = (block, element, modifier) => {
  const BE = `${block}__${element}`;
  return modifier ? `${BE}--${modifier}` : BE;
};

// BEM class parts
const formBlock = "flex-signup-form";
const inputElement = "email-input";
const errMsgElement = "err-msg";
const errModifier = "on-err";

// DOM objects
const form = document.getElementById("signup-form");
const input = document.querySelector("." + BEM(formBlock, inputElement));
const errMsg = document.querySelector("." + BEM(formBlock, errMsgElement));

// Add error indicators
const addErr = (message) => {
  form.classList.add(`${formBlock}--${errModifier}`);
  input.classList.add(BEM(formBlock, inputElement, errModifier));
  errMsg.classList.add(BEM(formBlock, errMsgElement, errModifier));
  errMsg.innerHTML = message;
};

// Remove error indicators
const removeErr = () => {
  form.classList.remove(`${formBlock}--${errModifier}`);
  input.classList.remove(BEM(formBlock, inputElement, errModifier));
  errMsg.classList.remove(BEM(formBlock, errMsgElement, errModifier));
};

// When the webpage loads, clear the value of input and remove error indicators.
window.addEventListener("load", (evt) => {
  input.value = "";
  removeErr();
});

// When input gets focus, remove error indicators.
input.addEventListener("focus", (evt) => {
  removeErr();
});

// Return true if email is valid and false otherwise.
const isValidEmail = (email) => {
  const re = /^\w+(\.\w+)*@\w+(\.\w+)*$/;
  return re.test(email);
};

// When the form is submitted, check whether or not input
// contains a valid email address. Activate or deactivate error
// indicators accordingly.
form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const email = input.value;
  if (isValidEmail(email)) {
    removeErr();
    alert("Email address is valid");
  } else {
    if (!email) {
      addErr("Whoops! It looks like you forgot to add your email");
    } else {
      addErr("Please provide a valid email address");
    }
  }
});
