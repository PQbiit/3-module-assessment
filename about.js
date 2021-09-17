console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	let name = form[0].value
	let checkboxes = document.querySelectorAll('.option-box:checked');
	let message = form[4].value;
	let checkedOptions = "";
	console.log(checkboxes[0].id);
	for (let i = 0; i < checkboxes.length; i++) {
		if(checkedOptions === ""){
			checkedOptions += checkboxes[i].id;
		}else{
			checkedOptions += `, ${checkboxes[i].id}`;
		}
	}
	alert(`Your details have been submitted!\n
	Name: ${name}\n
	How you found us: ${checkedOptions}\n
	Message: ${message}`)
	form.reset();
}

let form = document.querySelector('form#contact');
form.addEventListener('submit', handleSubmit);

let img = document.querySelector('img');
img.addEventListener('mouseover',()=>{
	alert("Little cat says: You look so pretty!")
});