document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    console.log('Form submitted:', { name, email, message });

    alert('Thank you for your message, ' + name + '!');

    // Clear the form
    document.getElementById('contact-form').reset();
});