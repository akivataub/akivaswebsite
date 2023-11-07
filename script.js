

document.getElementById("togglePassword").addEventListener("click", function() {
    var passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
});
function togglePassword() {
    var passwordField = document.getElementById("password");
    var showPasswordButton = document.getElementById("🙈");
    

    if (passwordField.type === "password") {
        passwordField.type = "text";
        showPasswordButton.textContent = "🙈";
    } else {
        passwordField.type = "password";
        showPasswordButton.textContent = "👁️";
    }
}

function checkCredentials() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if username and password are correct (replace with your own logic)
      if (username === "akiva" && password === "akivataub") {
        // Redirect to a different page
        window.location.href = "hietited.html";
    } else {
        alert("hahaha you have the wrong password or username");
    }
}
