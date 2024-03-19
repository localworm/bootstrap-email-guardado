// email-script.js

// Array containing the subject, sender, and content of the inbox emails
var emails = [
    {
        subject: "Big Things",
        sender: "bigman@gmail.com",
        content: "This is a test",
    },
];


// Function to show open email section
function toggleOpenEmailSection() {

    console.log('toggleOpenEmailSection() called');
    
    // Checks to see if screen size is smaller than desktop size
    if (window.innerWidth <= 992) {

        // Sets inbox dispay to none and creates a variable for open email section
        document.getElementById('inbox-section').style.display = 'none';
        var openEmailSection = document.getElementById('open-email-section');

        // Checks if display is set to none, and then toggles it off
        if (openEmailSection.classList.contains('d-none')){
            openEmailSection.classList.toggle('d-none');
        }
    }
}

// Function to show open email section 
function openInbox() {
    
    // Sets inbox display to block
    document.getElementById('inbox-section').style.display = 'block';

    // Hides open email section
    var openEmailSection = document.getElementById('open-email-section');
    openEmailSection.classList.toggle('d-none');
}




// Function to update open email content
// Takes index of sample emails array as input
function updateOpenEmailContent(index) {

    var email = emails[index];

    // Update the value of the input fields with the email content
    var emailSubjectInput = document.getElementById('email-subject');
    var emailSenderInput = document.getElementById('email-sender');
    var emailBodyTextarea = document.getElementById('email-body');

    // Set values for input fields
    emailSubjectInput.value = email.subject;
    emailSenderInput.value = email.sender;
    emailBodyTextarea.value = email.content;

    // Check if input fields are not readonly and then add readonly attribute
    if (!emailSubjectInput.readOnly) {
        emailSubjectInput.readOnly = true;
    }
    if (!emailSenderInput.readOnly) {
        emailSenderInput.readOnly = true;
    }
    if (!emailBodyTextarea.readOnly) {
        emailBodyTextarea.readOnly = true;
    }

    // Show the open email section
    toggleOpenEmailSection();
}

// Function to compose a new email
function composeEmail() {

    // Creates variables for subject, sender, and body
    var emailSubject = document.getElementById('email-subject');
    var emailSender = document.getElementById('email-sender');
    var emailBody = document.getElementById('email-body');

    // Remove read only attribute from email
    emailSubject.removeAttribute('readonly');
    emailSender.removeAttribute('readonly');
    emailBody.removeAttribute('readonly');

    // Clear the input fields
    emailSubject.value = '';
    emailSender.value = '';
    emailBody.value = '';

    // Show the open email section
    toggleOpenEmailSection();
}

// Function to check if the screen size is set to large
// This is used for displaying the inbox when screen size shifts from medium to large
function checkScreenSize() {

    var mediaQuery = window.matchMedia('(min-width: 992px)');

    // Check if the media query matches (screen size is large)
    if (mediaQuery.matches) {

        // Set the inbox section to block
        document.getElementById('inbox-section').style.display = 'block';
    }
}

// Add event listener for window resize
window.addEventListener('resize', function() {

    // Call the function to display the inbox when the screen size changes
    checkScreenSize();
});


// Function to handle slider change and update background color
function handleSliderChange() {
        
    // Get the value of the slider
    var sliderValue = this.value;

    // Calculate the hue value based on the slider value (range from 0 to 240)
    var hue = Math.round((240 * sliderValue) / 200);
            
    // Set the background color based on the slider value
    document.body.style.backgroundColor = 'hsl(' + hue + ', 50%, 55%)';

    // Set the background color of the open email section
    document.getElementById('open-email-section').style.backgroundColor = 'hsl(' + hue + ', 50%, 55%)';
            
    // Set the background color of the sidebar
    document.getElementById('sidebar').style.backgroundColor = 'hsl(' + hue + ', 50%, 55%)';
            
    // Set the background color of the inbox section
    document.getElementById('inbox-section').style.backgroundColor = 'hsl(' + hue + ', 50%, 55%)';

    // Calculate the complement hue value
    var complementHue = (hue + 180) % 360;
            
    // Set the background color of the header to the complement hue
    document.getElementById('header').style.backgroundColor = 'hsl(' + complementHue + ', 50%, 55%)';
            
    // Set the background color of the footer to the complement hue
    document.getElementById('footer').style.backgroundColor = 'hsl(' + complementHue + ', 50%, 55%)';
    
}

// Calls color change slider function when page loads
window.onload = function() {

    // Get all sliders with class 'color-slider'
    var sliders = document.querySelectorAll('.color-slider');
    
    // Loop through each slider and add event listener
    sliders.forEach(function(slider) {
        slider.addEventListener('input', handleSliderChange);
    });
    
    // Call the function initially
    handleSliderChange.call(sliders[0]); // Call the function with the first slider to set initial color

};