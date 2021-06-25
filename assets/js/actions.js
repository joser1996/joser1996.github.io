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
	console.log(myStorage);
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