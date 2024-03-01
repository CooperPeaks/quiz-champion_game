function startRotation() {
    const element1 = document.getElementById('element1');
    const element2 = document.getElementById('element2');
  
    // Apply the rotation class to the first element
    element1.classList.add('rotating');
  
    // Set a timeout to trigger the appearance and rotation of the second element
    setTimeout(() => {
      element1.style.opacity = 0;  // Hide the first element
      element2.style.opacity = 1;
      element2.style.pointerEvents = 'auto'; // Enable pointer events on the visible element
      element2.classList.add('rotating');
    }, 1000); // Adjust the timing as needed
  }
  