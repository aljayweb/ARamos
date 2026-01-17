document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Stop normal form submit

    const serviceID = "service_55kjfra";
    const templateID = "template_m7m5f2a";

    emailjs.sendForm(serviceID, templateID, this)
        .then((response) => {
            alert("Your image and message were sent successfully!");
            this.reset();
            console.log("SUCCESS!", response.status, response.text);
        })
        .catch((error) => {
            console.error("FAILED...", error);
            alert("Failed to send the message. Please try again.");
        });
});
