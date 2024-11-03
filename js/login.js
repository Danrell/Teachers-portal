 /*function showloading() {
    document.getElementById('login-btn').disabled = true;
    document.getElementById('login-btn').innerHTML = 'LOADING...';
    setTimeout(function() {
        window.location.href = 'Home.html';
    }, 1000); // 1 seconds
}*/
    document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.querySelector("#pwd");
    const togglePassword = document.querySelector(".toggle-password i");
  
    if (passwordInput && togglePassword) {
      togglePassword.addEventListener("click", function() {
        if (passwordInput.type === "password") {
          passwordInput.type = "text";
          togglePassword.classList.remove("fa-eye");
          togglePassword.classList.add("fa-eye-slash");
        } else {
          passwordInput.type = "password";
          togglePassword.classList.remove("fa-eye-slash");
          togglePassword.classList.add("fa-eye");
        }
      });
    } 
  });