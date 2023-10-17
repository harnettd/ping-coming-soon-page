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

})
