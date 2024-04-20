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
// Function to add input event listeners to remove error styling and error message on typing
function addInputEventListeners() {
    const inputFields = document.querySelectorAll('.item');
    inputFields.forEach(inputField => {
        inputField.addEventListener('input', () => {
            const parent = inputField.parentElement;
            if (inputField.value.trim() !== "") {
                inputField.classList.remove("error");
                parent.classList.remove("error");
                parent.querySelector(".error-txt").innerText = ""; // Clear error message
            }
        });
    });  
}

// Attach input event listeners to remove error styling and error message on typing
addInputEventListeners();

// Form submission event listener
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Check if all inputs are filled and validate email
    const isFormValid = checkInputs() && checkEmail();

    // If the form is valid, proceed with sending the email
    if (isFormValid) {
        sendEmail();
    }
});

// Function to check if all inputs are filled
function checkInputs() {
    let isValid = true;
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value.trim() === "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
            isValid = false;
        } else {
            item.classList.remove("error");
            item.parentElement.classList.remove("error");
        }
    }
    return isValid;
}

// Function to check if email is valid
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
