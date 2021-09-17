console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	alert("Your details have been submitted!")
}

let form = document.querySelector('form#contact');
form.addEventListener('submit', handleSubmit);
let img = document.querySelector('img');
img.addEventListener('mouseover',()=>{
	alert("Little cat says: You look so pretty!")
});