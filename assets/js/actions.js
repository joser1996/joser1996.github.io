//get local storage
myStorage = window.localStorage;
//make sure current mode is persistent by checking and updating if necessary

function toggleDarkMode() {
	var element = document.body;
	element.classList.toggle("dark");
	if(element.classList.contains("dark")) {
		myStorage.setItem('mode', 'dark');
	} else {
		myStorage.setItem('mode', 'light');
	}

	var image = document.getElementById('sunMoon');
	if(isDark()) {
		//change to moon icon
		image.src = "/assets/images/moon.png"
	} else {
		//change to sun icon
		image.src = "/assets/images/sun.png"
	}
}

function updateViewMode() {
	if( ! isDark()) {
		toggleDarkMode();
	}
}

function isDark() {
	var storedMode = myStorage.getItem('mode');
	//console.log("stored mode: ", storedMode);
	if (storedMode == "dark") {
		return true;
	} else {
		return false;
	}
}


function showModal(itemName) {
	var idStr = "myModal" + itemName;
	console.log("Item that called was: ", idStr);
	var modal = document.getElementById(idStr);
	modal.style.display = "block";
}

window.onclick = function(e) {
	
	var idStr = e.target.id;
	console.log("Target: ", idStr);
	var modal = document.getElementById(idStr);
	if (e.target == modal) {
		modal.style.display = "none";
	}
}

function closeModal(id) {
	var idStr = "myModal" + id;
	var modal = document.getElementById(idStr);
	modal.style.display = "none";
}