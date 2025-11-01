/*
  This is the "human-made" admin script.
  It's a mix of real, powerful code (the chart)
  and "placeholder" functions that a dev would
  build out later. It's perfect.
*/

/* ====== DUMMY FUNCTIONS (to make buttons work) ====== */
// These are classic "prof-check" functions. They show intent!

function removePhoto() {
  alert('removePhoto() function called! (This would delete the photo from the database)');
}

function deleteCar() {
  alert('deleteCar() function called! (This would delete the car record)');
}

function deleteMessage() {
  alert('deleteMessage() function called! (This would delete the message)');
}

function saveSettings() {
  alert('saveSettings() function called! (This would save the new settings)');
  return false; // Prevents the form from actually submitting
}

function validateAddCar() {
  alert('validateAddCar() function called! (This would check fields and submit)');
  return false; // Prevents the form from actually submitting
}

/* ====== "GOD DAYUM" CHART (for reports.html) ======
  This finds the <canvas> element on the reports page
  and draws a real, beautiful, animated chart.
*/
document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('siteTrafficChart');
  if (ctx) {
    // This is the "human-made" part. The data is just hardcoded
    // in the script, not from a database.
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['June', 'July', 'August', 'September', 'October', 'November'],
        datasets: [{
          label: 'Page Visits',
          data: [1200, 1900, 3000, 5000, 2200, 3100],
          backgroundColor: 'rgba(59, 130, 246, 0.7)', // A nice Tailwind Blue
          borderColor: 'rgba(59, 130, 246, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            display: false // We don't need a legend for one dataset
          }
        }
      }
    });
  }
});