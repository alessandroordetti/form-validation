/* Much simpler form validation */
const inputs = document.querySelectorAll(".form-input");
const checkbox = document.getElementById("checkbox1");
const email = document.getElementById("email");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const submitButton = document.getElementById("submit-button");
let results = [];


/* Check validity on startup */
for (let input of inputs) {
	if (!input.checkValidity()) {
		checkbox.disabled = true;
	}
	input.addEventListener("change", (e) => {
		if (e.currentTarget.checkValidity()) {
			checkbox.disabled = false;
		}
	});
}

submitButton.addEventListener("click", function () {
    results = [];
    results.push(email.value.toLowerCase(), lastName.value.toLowerCase(), firstName.value.toLowerCase());

	if (firstName.value == ""){
	alert('Inserisci un nome valido!')
	}
    console.table(results);
})


