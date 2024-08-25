function updateTime() {
	const timerElement = document.getElementById("timer");
	const currentDate = new Date();
	const year = currentDate.getFullYear();
	const month = currentDate.getMonth() + 1;
	const day = String(currentDate.getDate()).padStart(2, "0");
	let hours = currentDate.getHours();
	const minutes = String(currentDate.getMinutes()).padStart(2, "0");
	const seconds = String(currentDate.getSeconds()).padStart(2, "0");

	hours = hours % 12 || 12;

	const ampm = hours >= 12 ? "PM" : "AM";
	const formattedTime =`${month}/${day}/${year}, ${hours}:${minutes}:${seconds} ${ampm}`;
	timerElement.textContent = formattedTime;
}
updateTime();

setInterval(updateTime, 1000); // 1000ms = 1 sec