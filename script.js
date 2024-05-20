//your JS code here. If required.

// Function to update the time displayed in the 'timer' element
function updateTime() {
 // Select the <p> element with the id 'timer'
 const timerElement = document.getElementById("timer");


 // Get the current date and time
 const now = new Date();


 // Extract the year from the current date
 const year = now.getFullYear();


 // Extract the month from the current date and add 1 (because months are zero-based), then convert to a two-digit string
 const month = String(now.getMonth() + 1).padStart(2, "0");


 // Extract the day of the month from the current date and convert to a two-digit string
 const day = String(now.getDate()).padStart(2, "0");


 // Extract the hours from the current time
 const hours = now.getHours();


 // Extract the minutes from the current time and convert to a two-digit string
 const minutes = String(now.getMinutes()).padStart(2, "0");


 // Extract the seconds from the current time and convert to a two-digit string
 const seconds = String(now.getSeconds()).padStart(2, "0");


 // Determine if the current time is AM or PM
 const ampm = hours >= 12 ? "PM" : "AM";


 // Convert the hours to 12-hour format (0 hours becomes 12)
 const formattedHours = hours % 12 || 12;


 // Create a formatted time string in MM/DD/YYYY, HH:MM:SS AM/PM format
 const formattedTime = `${month}/${day}/${year}, ${formattedHours}:${minutes}:${seconds} ${ampm}`;


 // Update the content of the timer element with the formatted time string
 timerElement.textContent = formattedTime;
}


// Call updateTime once immediately to show the current time right away
updateTime();


// Set an interval to call updateTime every second (1000 milliseconds), so the time is updated dynamically
setInterval(updateTime, 1000);
