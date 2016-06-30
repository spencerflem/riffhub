elements = document.getElementsByClassName("toggle");
console.log(elements);

for (element in elements) {
	console.log("aaa");
	element.onclick = toggle();
}

function toggle() {
	console.log("clicked!");
}
