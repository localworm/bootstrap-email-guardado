// email-script.js

// Array containing the subject, sender, and content of the emails
var emails = [
    {
        subject: "Big Things",
        sender: "bigman@gmail.com",
        content: "I got some big things cooking up, and you're gonna want to get in on this, believe you me!",
    },

    {
        subject: "Obvious Scam",
        sender: "known_scammer95@hotmail.com",
        content: "CLick thIs liNK t0 LosE ALL ur mUney1! shady_link.xyz",
    },

    {
        subject: "Pls be my friend",
        sender: "loner01@gmail.com",
        content: "Look, I'll be honest. I have many friends. But I need more....",
    },

    {
        subject: "RE: Concerning the elves",
        sender: "gandalf@wizard.net",
        content: "Hey bud, it's the big G. Just getting back to you bout them elves. I know they can be a handful, but trust me dude they're cool. Hope you and the missus are doing well. Peace. B)",
    },

    {
        subject: "GIVE US OUR MONEY!!!!",
        sender: "da_mob@gabagool.com",
        content: "Ok wise guy, you had ya chance. You think you're funny, huh?! Let's see if ya still laughin' after Lil Gambino breaks ya thumbs!! -Sent from my iPhone",
    },

    {
        subject: "JUST REACHING OUT :)",
        sender: "GRANGRAN56@yahoo.com",
        content: "HEY THERE SWEETIE, JUST THOUGHT I'D DROP YOU A LINE ON MY NEW COMPUTER BOOK. THAT'S RIGHT, GRAN GRAN IS ONLINE :) SMILEY FACE. I WANTED TO SEND SOME COOKIES, BUT I'M NOT QUITE SURE HOW TO OVER THE EMAILS. ANY WAYS HOPE YOU'RE NOT SMOKING STILL. LOVE GRAM GRAM",
    },

    {
        subject: "Purchase Confirmed",
        sender: "doritosupport@fritolay.com",
        content: "Your order is on its way! Order receipt: 100 x Cool Ranch Doritos Party Size",
    },

    {
        subject: "CLICK HERE OR ELSE",
        sender: "oreo@cookie.web",
        content: "BUY OREOS! BUY OREOS! BUY OREOS! BUY OREOS! BUY OREOS! BUY OREOS! BUY OREOS! BUY OREOS! BUY OREOS! BUY OREOS! BUY OREOS! BUY OREOS! BUY OREOS!",
    },

    {
        subject: "Pants on sale now!",
        sender: "oldnavy@clothes.com",
        content: "We just got our newest lines of PANTS for the summer, but hurry on over now or else it'll be too late :'(",
    },

    {
        subject: "GOKU NEEDS YOUR ENERGY",
        sender: "piccolo@kami.net",
        content: "RIP Toriyama",
    },

    {
        subject: "Nothing wierd I promise",
        sender: "drew@fakemail.com",
        content: "Hey pal, there's nothing really going on in this email. Thanks for clicking on this / reading the code. Have a blessed day :)",
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

    // Gets open-email-section by Id and stores the variable
    var openEmailSection = document.getElementById('open-email-section');

    // Checks if display is not set to none, and then toggles it on
    if (!openEmailSection.classList.contains('d-none')){
        openEmailSection.classList.toggle('d-none');
    }
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
    emailSubjectInput.value = 'Subject: ' + email.subject;
    emailSenderInput.value = 'From: ' + email.sender;
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

        // Call openInbox() to set inbox display to block and open email to d-none
        openInbox();
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
    document.getElementById('sidebar').style.backgroundColor = 'hsl(' + hue + ', 50%, 40%)';
            
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