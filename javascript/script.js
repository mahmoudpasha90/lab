document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    if (registerForm) {
      registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        if (password !== confirmPassword) {
          alert('Passwords do not match!');
          return;
        }
        alert('Registered Successfully! Redirecting to Login page...');
        window.location.href = 'login.html'; 
      });
    }
    if (loginForm) {
      loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Logged in successfully!');
      });
    }
  });
  