document.getElementById('correctionForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var textInput = document.getElementById('textInput').value;

  // Send the text to the server for correction
  fetch('correction.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'text=' + encodeURIComponent(textInput)
  })
  .then(function(response) {
    return response.text();
  })
  .then(function(correctedText) {
    // Display the corrected text
    document.getElementById('correctedText').textContent = correctedText;
  })
  .catch(function(error) {
    console.error('Error:', error);
  });
});
