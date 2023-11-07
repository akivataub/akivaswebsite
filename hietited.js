function sendemail(){
Email.send({
    Host : "smtp.elasticemail.com",
    Username : "akivataub1234@gmail.com",
    Password : "67D40A52ABC0022CEDB9C97DD93D6A8F6D16",
    To : 'akivataub123@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New Contact Form Enquiry",
    Body : "name: " + document.getElementById("name").value
    + "<br> Email: " + document.getElementById("email").value
    + "<br> phone no: " + document.getElementById("phone").value
    + "<br> message: " + document.getElementById("message").value
}).then(
  message => alert("message sent sucsesfully")
);

}