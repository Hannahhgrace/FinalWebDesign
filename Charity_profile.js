// button.js

// Function to display the volunteer form when the button is clicked
function displayForm() {
    const form = document.getElementById('volunteerForm');
    form.style.display = 'block';
  }
  
  // Function to handle form submission (just an alert for demonstration)
  function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    alert(`Thank you, ${name}, for volunteering! We will contact you at ${email}.`);
  }
  
  // Add event listener to the "Volunteer Now" button
  const volunteerBtn = document.getElementById('volunteerBtn');
  volunteerBtn.addEventListener('click', displayForm);
  
  // Add event listener to the form submission
  const form = document.getElementById('volunteerForm');
  form.addEventListener('submit', handleSubmit);
  
  // Add interactivity to the charity details
  const charityDetails = document.getElementById('charityDetails');
  charityDetails.addEventListener('mouseover', () => {
    // You can add code here to display additional charity details dynamically
    alert('Additional charity details here.');
  });
  


  
  