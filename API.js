document.getElementById('volunteerForm').addEventListener('submit', function (event) {
	event.preventDefault(); // Prevent the default form submission

	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const phone = document.getElementById('phone').value;

	// Call your Mailgun API endpoint here
	const apiKey = '4f5672ff38921e6d9646b0524fc40ec4-19806d14-a08b1711';
	const domain = 'helphub.mydomain.com';
	const recipient = 'henriquez26@adrian.edu'; 

	fetch(`https://api.mailgun.net/v3/${domain}/messages`, {
		method: 'POST',
		headers: {
			'Authorization': 'Basic ' + btoa('api:' + apiKey),
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: `from=${email}&to=${recipient}&subject=Volunteer Submission&text=Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}`
	})
		.then(response => {
			if (!response.ok) {
				throw new Error('Failed to send email');
			}
			return response.json();
		})
		.then(data => {
			alert('Volunteer submission successful!');
			document.getElementById('volunteerForm').reset();
		})
		.catch(error => {
			alert('Failed to send volunteer submission. Please try again later.');
			console.error('Error:', error);
		});
});