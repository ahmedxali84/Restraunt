function submitContactForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const rating = document.querySelector('input[name="rating"]:checked');

  if (name && email && message && rating) {
    // Show SweetAlert success message
    Swal.fire({
      title: 'Thank You!',
      text: 'Your message has been sent. We will get back to you soon.',
      icon: 'success',
      background: '#333',
      color: '#fff',
      confirmButtonText: 'OK',
      confirmButtonColor: '#e63946'
    });
  } else {
    // Show SweetAlert error message
    Swal.fire({
      title: 'Oops!',
      text: 'Please fill in all fields and provide a rating.',
      icon: 'error',
      background: '#333',
      color: '#fff',
      confirmButtonText: 'OK',
      confirmButtonColor: '#e63946'
    });
  }
}