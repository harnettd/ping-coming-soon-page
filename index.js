$(document).ready(() => {

    // Add hover states to the social media icons
    $(".flex-socials-list__icon-wrapper").hover(function () {
        const iconWrapper = $(this)
        const icon = iconWrapper.children(".flex-socials-list__icon")

        iconWrapper.toggleClass("flex-socials-list__icon-wrapper--hover")
        icon.toggleClass("flex-socials-list__icon--hover")
    })

    // Add hover state to the submit button
    $(".flex-signup-form__submit-btn").hover(function () {
        const button = $(this)

        button.toggleClass("flex-signup-form__submit-btn--hover")
    })

    // Add hover state to the email input
    $(".flex-signup-form__email-input").hover(function () {
        const emailInput = $(this)
        const errroMessage = emailInput.next(".flex-signup-form__err-msg")

        emailInput.toggleClass("flex-signup-form__email-input--on-err")
        errroMessage.toggleClass("flex-signup-form__err-msg--on-err")
    })
})
