function updateTime(){
	const timerElement = document.getElementById("timer");
	const now = new Date();
	const year = now.getFullYear();
	const month = String(now.getMonth() + 1).padStart(2, "0");
	const day = String(now.getDate()).padStart(2, "0");
	const hours = now.getHours();
	const formattedHours = hours % 12 || 12;
	const ampm = hours >= 12 ? "PM" : "AM"
	const minutes = String(now.getMinutes()).padStart(2, "0");
	const seconds = String(now.getSeconds()).padStart(2, "0")
	const formattedTime = `${month}/${day}/${year}, ${formattedHours}:${minutes}:${seconds} ${ampm}`

	timerElement.textContent = formattedTime;
}
updateTime();

setInterval(updateTime, 1000);


