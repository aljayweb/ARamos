document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form from submitting the default way

    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_55kjfra";
    const templateID = "template_m7m5f2a";

    emailjs.send(serviceID, templateID, templateParams)
    .then(response => {
        alert("Your message was sent successfully!");
        document.getElementById("contact-form").reset();
        console.log(response);
    })
    .catch(error => {
        console.error("FAILED...", error);
        alert("Failed to send the message. Please try again.");
    });
});
