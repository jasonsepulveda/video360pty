// email.js

emailjs.init("T_Ar7YBsOpM6sWDFY"); 

document.addEventListener("DOMContentLoaded", function () {
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // 
    const name = contactForm.querySelector('[placeholder="Tu nombre"]').value;
    const email = contactForm.querySelector('[placeholder="Tu Email"]').value;
    const phone = contactForm.querySelector(
    '[placeholder="Tu número de teléfono"]'
    ).value;
    const subject = contactForm.querySelector('[placeholder="Asunto"]').value;
    const message = contactForm.querySelector('[name="messege"]').value;

    // 
    emailjs
    .send("service_08sqwr6", "template_94k4888", {
        from_name: name,
        from_email: email,
        phone: phone,
        subject: subject,
        message_html: message,
    })
    .then(
        function (response) {
        console.log("Correo electrónico enviado correctamente", response);
        // 
        },
        function (error) {
        console.error("Error al enviar el correo electrónico", error);
        // 
        }
    );

    // Limpia el formulario después de enviar
    contactForm.reset();
});
});