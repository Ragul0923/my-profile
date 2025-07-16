document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent page refresh

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMsg = document.getElementById('errorMsg');

  if (username === '' || password === '') {
    errorMsg.textContent = 'Please fill in all fields.';
  } else if (password.length < 6) {
    errorMsg.textContent = 'Password must be at least 6 characters.';
  } else {
    errorMsg.textContent = '';
    alert('Login successful!');
    // You can redirect or handle login logic here
  }
});
