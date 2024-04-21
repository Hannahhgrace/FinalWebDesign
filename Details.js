document.addEventListener("DOMContentLoaded", function() {
  const showDetailsButton = document.getElementById('show-details');
  const additionalDetails = document.getElementById('additional-details');
  
  showDetailsButton.addEventListener('mouseenter', function() {
    additionalDetails.style.display = 'block';
  });
  
  additionalDetails.addEventListener('mouseleave', function() {
    additionalDetails.style.display = 'none';
    });
  });


