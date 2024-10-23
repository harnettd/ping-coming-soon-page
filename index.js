const emailInput = document.querySelector(".flex-signup-form__email-input");
const errMsg = document.querySelector(".flex-signup-form__err-msg");
const submitBtn = document.querySelector(".flex-signup-form__submit-btn");

// When the webpage loads, clear the value of emailInput and deactivate error messages.
emailInput.value = "";
emailInput.classList.remove("flex-signup-form__email-input--on-err");
errMsg.classList.remove("flex-signup-form__err-msg--on-err");

const isValidEmail = (email) => {
  return false;
};

// Add email validation to the submit button
$(".flex-signup-form__submit-btn").click((evt) => {
  evt.preventDefault();
  console.log("Click!");

  const input = document.querySelector(".flex-signup-form__email-input");
  const email = input.value;

  console.log(input);
  console.log(`Email address: ${email}`);

  if (!isValidEmail(email)) {
    document
      .querySelector(".flex-signup-form__email-input")
      .classList.add("flex-signup-form__email-input--on-err");
    document
      .querySelector(".flex-signup-form__err-msg")
      .classList.add("flex-signup-form__err-msg--on-err");
  } else {
    console.log("Valid email address");
  }
});

// Add hover states to the social media icons
$(".flex-socials-list__icon-wrapper").hover(function () {
  const iconWrapper = $(this);
  const icon = iconWrapper.children(".flex-socials-list__icon");

  iconWrapper.toggleClass("flex-socials-list__icon-wrapper--hover");
  icon.toggleClass("flex-socials-list__icon--hover");
});
