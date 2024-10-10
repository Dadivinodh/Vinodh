// Function to get user details
function getDetails() {
    const nameInput = document.getElementById('name-input').value;
    const idInput = document.getElementById('id-input').value;
    const welcomeMessage = document.getElementById('welcome-message');
    const errorMessage = document.getElementById('error-message');

    if (nameInput && idInput === "9705353611") {
        welcomeMessage.textContent = `Welcome, ${nameInput} (ID: ${idInput})!`;

        // Hide the input fields and button after successful submission
        document.getElementById('name-prompt').style.display = 'none';
        document.getElementById('name-input').style.display = 'none';
        document.getElementById('id-input').style.display = 'none';
        document.querySelector('.button-container').style.display = 'none';
        errorMessage.textContent = ''; // Clear error message
    } else {
        errorMessage.textContent = 'Incorrect ID. Please try again.'; // Show error message
    }
}

// Function to animate birds and speak out message
function animateBird(birdId) {
    const bird = document.getElementById(birdId);

    // Animate the bird flying to the other tree
    if (birdId === 'bird1') {
        bird.style.transform = 'translate(300px, -100px)'; // Move to tree 2
    } else {
        bird.style.transform = 'translate(-300px, -100px)'; // Move to tree 1
    }

    // Speak out when bird is touched
    speakOut("Don't touch me");

    // Reset position after animation
    setTimeout(() => {
        bird.style.transform = 'translate(0, 0)';
    }, 1000); // Time for the flying animation
}

// Function to speak out text
function speakOut(message) {
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(message);
    synth.speak(utterThis);
}

// Function to redirect to WhatsApp with a prefilled message
function redirectToWhatsApp() {
    const whatsappURL = "https://wa.me/919705353611?text=Hi%20Vinodh,%20send%20me%20my%20ID";
    window.open(whatsappURL, '_blank');
}