// email-script.js

function showOpenEmail(event) {

    // Prevents the default action of the a tag
    event.preventDefault();
    console.log('showOpenEmail() called');
    
    // Function to show open email section
    if (window.innerWidth <= 768) {
        document.getElementById('inbox-section').style.display = 'none';
        var openEmailSection = document.getElementById('open-email-section');
            openEmailSection.classList.toggle('d-none');
    }
}
