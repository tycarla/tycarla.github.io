const menuIcon = document.querySelector('#menu-icons');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

function openGmail(){
    window.location.href = "mailto:carlaty07@gmail.com";
}

// Get the submit button and input field
const submitButton = document.getElementById('submit-button');
const emailInput = document.getElementById('user-email');

// Add a click event listener to the submit button
submitButton.addEventListener('click', () => {
    const userEmail = emailInput.value; // Get the value of the input field
    if (userEmail) {
        // Construct the mailto link with the user's email
        const mailtoLink = `mailto:carlaty07@example.com?subject=Contact from Portfolio&body=User Email: ${userEmail}`;
        
        // Open the mail client
        window.location.href = mailtoLink;
    } else {
        alert('Please enter your email address'); // Alert if the input is empty
    }
});

const toggleTheme = document.getElementById('toggle-theme');
const themeIcon = document.getElementById('theme-icon'); // get the icon span

toggleTheme.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');

    // Change icon based on mode
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.textContent = '🌙'; // moon for dark mode
    } else {
        themeIcon.textContent = '☀️'; // sun for light mode
    }
});
