var typed = new Typed(".text",{
    strings:["Frontend Developer", "Graphics Designer", "Freelancer"],
    typeSpeed : 10,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
});
const form = document.querySelector('form')
const fullName = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const subject = document.getElementById("subject")
const message = document.getElementById("message")

function sendEmail(){
    const fullName = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const bodyMessage = `Full Name: ${fullName}<br> Email: ${email}<br> Phone Number: ${phone}<br> Message: ${message}<br>`;
    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "kaleabsolomon1621@gmail.com",
        Password : "92045FBFCC8F29215F4C723FFBDB25C50FA9",
        To : 'kaleabsolomon1621@gmail.com',
        From : "kaleabsolomon1621@gmail.com",
        Subject : "Test Message",
        Body : bodyMessage
    }).then(
        message => {
            alert("Message Sent Successfully");
            document.getElementById('contactForm').reset(); // Reset the form
        }
    ).catch(
        error => console.error("Error:", error)
    );
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    sendEmail();
});

