document.addEventListener("DOMContentLoaded", function() {
    // Slideshow functionality
    const slideshowImages = ["image1.jpg", "image2.jpg", "image3.jpg"];
    let currentImageIndex = 0;
    const slideshowContainer = document.querySelector(".slideshow");

    function changeSlide() {
        currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
        slideshowContainer.style.backgroundImage = `url('${slideshowImages[currentImageIndex]}')`;
    }

    setInterval(changeSlide, 5000); // Change slide every 5 seconds

    // Newsletter form validation
    const newsletterForm = document.querySelector(".newsletter form");
    newsletterForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const emailInput = newsletterForm.querySelector("input[type='email']");
        const emailValue = emailInput.value.trim();
        if (emailValue === "") {
            alert("Please enter your email address.");
            emailInput.focus();
        } else {
            alert(`Thank you for subscribing with email: ${emailValue}`);
            newsletterForm.reset();
        }
    });
});
