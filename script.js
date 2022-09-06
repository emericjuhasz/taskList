var button = document.getElementById('button');
var input = document.getElementById('taskinput');
var ul = document.querySelector('ul');

function inputLength () {
	return input.value.length;
}
function createListItem () {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListItem();
	}
}

button.addEventListener("click", addListAfterClick);
