/* ====== Mobile Menu Toggle ====== */
const menuToggle = document.getElementById('menu-toggle');
const menuLinks = document.getElementById('menu-links');

// Check if the menu toggle button exists before adding a listener
if (menuToggle) {
  menuToggle.addEventListener('click', function() {
    menuLinks.classList.toggle('hidden');
  });
}


/* ====== Contact Form Validation ====== */
function validateContact() {
  // Get the form fields by their ID
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simple checks
  if (name.trim() === '') {
    alert('Please enter your name.');
    return false; // This stops the form from submitting
  }

  if (email.trim() === '') {
    alert('Please enter your email.');
    return false; 
  }

  // A simple check (regex) for a valid email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return false;
  }

  if (message.trim() === '') {
    alert('Please enter a message.');
    return false;
  }

  // If all checks pass
  alert('Form submitted successfully! (This is a demo)');
  
  // For this demo, we'll stop the form from *actually* submitting.
  // In a real project, you would 'return true' to let it send.
  return false; 
}