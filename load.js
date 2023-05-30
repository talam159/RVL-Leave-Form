function calculateTotalDays() {
    const leaveFromDate = new Date(document.getElementById("leaveFromDate").value);
    const leaveToDate = new Date(document.getElementById("leaveToDate").value);
    
    if (leaveFromDate > leaveToDate) {
      document.getElementById("totalDays").value = "";
      alert("Leave To Date cannot be earlier than Leave From Date.");
    } else {
      const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
      const totalDays = Math.round((leaveToDate - leaveFromDate) / oneDay) + 1;
      document.getElementById("totalDays").value = totalDays;
      return totalDays;
    }
  }

  window.onload = function() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById("date").value = today;

    function calculateRemainingLeave() {
          // Get the input and span elements
          const enjoyedLeaveInput = document.getElementById('enjoyed-leave');
          const remainingLeaveSpan = document.getElementById('remaining-leave');
          const totalLeaveSpan = document.getElementById('total-leave');

          // Get the values of enjoyed leave and total leave
          const enjoyedLeave = parseInt(enjoyedLeaveInput.value);
          const totalLeave = parseInt(totalLeaveSpan.textContent);

          // Calculate the remaining leave
          const remainingLeave = totalLeave - enjoyedLeave;

          // Update the remaining leave span with the calculated value
          remainingLeaveSpan.textContent = remainingLeave;
      }
  };

  function formatDate() {
    var today = new Date();
    console.log(today);
    var day = today.getDate();
    var month = today.getMonth() + 1; // Months are zero-based, so we add 1
    var year = today.getFullYear();
    
    // Pad the day and month with leading zeros if necessary
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    
    var formattedDate = day + '/' + month + '/' + year;
    document.getElementById('formatted-date').textContent = formattedDate;
    return formattedDate;
  }
  function convertDateFormat(dateString) {
  var year = dateString.substr(0, 4);
  var month = parseInt(dateString.substr(4, 2));
  var day = dateString.substr(6, 2);

  // Define an array of month names
  var monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Create a Date object with the provided year, month (minus 1 since it's zero-based), and day
  var date = new Date(year, month - 1, day);

  // Get the month name from the monthNames array
  var monthName = monthNames[date.getMonth()];

  // Concatenate the day, month name, and year with comma
  return day + " " + monthName + " " + year;
}


function convertDateFormat(dateString) {
  var parts = dateString.split("-");
  var year = parts[0];
  var month = parseInt(parts[1], 10);
  var day = parseInt(parts[2], 10);

  // Define an array of month names
  var monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Create a Date object with the provided year, month (minus 1 since it's zero-based), and day
  var date = new Date(year, month - 1, day);

  // Get the month name from the monthNames array
  var monthName = monthNames[date.getMonth()];

  // Concatenate the day, month name, and year
  var formattedDate = day + " " + monthName + " " + year;
  return formattedDate;
}

function convertDateFormat(dateString) {
  var parts = dateString.split("-");
  var year = parts[0];
  var month = parseInt(parts[1], 10);
  var day = parseInt(parts[2], 10);

  // Define an array of month names
  var monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Create a Date object with the provided year, month (minus 1 since it's zero-based), and day
  var date = new Date(year, month - 1, day);

  // Get the month name from the monthNames array
  var monthName = monthNames[date.getMonth()];

  // Concatenate the day, month name, and year
  var formattedDate = day + " " + monthName + " " + year;
  return formattedDate;
}


    