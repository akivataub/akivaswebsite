// Include the Email.js SDK
emailjs.init("akivataub1234@gmail.com"); // Replace "user_your_user_id" with your actual User ID

// Function to send email
function sendEmail() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Template parameters
  var templateParams = {
    to_name: "akiva", // Replace with the recipient's name
    from_name: name,
    from_email: email,
    message: message,
  };

  // Send email using Email.js
  emailjs.send("sservice_6er0y29", "template_your_template_id", templateParams)
    .then(function (response) {
      console.log("Email sent successfully:", response);
      // You can add code to handle the success, like showing a success message
    }, function (error) {
      console.log("Email failed to send:", error);
      // You can add code to handle the error, like showing an error message
    });
}
