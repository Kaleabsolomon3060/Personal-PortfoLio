var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Graphics Designer", "Freelancer"],
    typeSpeed: 10,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
const form = document.querySelector('form')
const fullName = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const subject = document.getElementById("subject")
const message = document.getElementById("message")

function sendEmail() {
    const fullName = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const bodyMessage = `Full Name: ${fullName}<br> Email: ${email}<br> Phone Number: ${phone}<br> Message: ${message}<br>`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "kaleabsolomon1621@gmail.com",
        Password: "92045FBFCC8F29215F4C723FFBDB25C50FA9",
        To: 'kaleabsolomon1621@gmail.com',
        From: "kaleabsolomon1621@gmail.com",
        Subject: "Test Message",
        Body: bodyMessage
    }).then(
        message => {
            if (message === "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent Successfully!",
                    icon: "success"
                }).then(() => {
                    document.getElementById('contactForm').reset(); // Reset the form after the alert is closed
                });
            } else {
                console.error("Error:", message);
                // Handle error
            }
        }
    ).catch(
        error => console.error("Error:", error)
    );
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Check if all inputs are filled and validate email
    const isFormValid = checkInputs() && checkEmail();
    
    // If the form is valid, proceed with sending the email
    if (isFormValid) {
        sendEmail();
    }
});

function checkInputs() {
    let isValid = true;
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        // Check if the input value is empty
        if (item.value.trim() === "") {
            // Add error class to the input and its parent element
            item.classList.add("error");
            item.parentElement.classList.add("error");
            isValid = false;
        } else {
            // Remove error styles if input is not empty
            item.classList.remove("error");
            item.parentElement.classList.remove("error");
        }
    }
    return isValid;
}

function checkEmail() {
    const emailValue = email.value.trim();
    const emailRegex = /^([A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4})?$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");

    if (!emailValue.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (emailValue !== "") {
            errorTxtEmail.innerText = "Enter a valid email address";
        } else {
            errorTxtEmail.innerText = "Email can't be blank";
        }
        return false;
    } else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
        return true;
    }
}


