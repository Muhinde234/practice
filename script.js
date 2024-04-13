function submitForm(event) {
    event.preventDefault();
    // Fetch form data
    const form = document.getElementById("registrationForm");
    const formData = new FormData(form);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
  
    // Validate password and confirm password
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  
    // Perform registration logic (e.g., send data to server)
    // Example: fetch('registrationEndpoint', { method: 'POST', body: formData })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));
    alert("Registration successful!");
  }
  