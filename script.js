document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    // For now, just log the values (you can send them to an API later)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Optionally clear the form
    event.target.reset();
    alert('Thank you for your message!');
});
