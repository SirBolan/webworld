// Login Function
function setFormMessage(formElement, type, message) {
	const messageElement = formElement.querySelector('.form__message');

	messageElement.textContent = message;
	messageElement.classList.remove(
		'form__message--success',
		'form__message--error'
	);
	messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, errorMessage, message) {
	inputElement.classList.add('form__input--error');
	inputElement.parentElement.querySelector(
		'.form__input-error-message'
	).textContent = message;
}

function clearInputError(inputElement) {
	inputElement.classList.remove('form__input--error');
	inputElement.parentElement.querySelector(
		'.form__input-error-message'
	).textContent = '';
}

document.addEventListener('DOMContentLoaded', () => {
	const loginForm = document.querySelector('#login');
	const createAccountForm = document.querySelector('#createAccount');

	document
		.querySelector('#linkCreateAccount')
		.addEventListener('click', (e) => {
			e.preventDefault();
			loginForm.classList.add('form--hidden');
			createAccountForm.classList.remove('form--hidden');
		});

	document.querySelector('#linkLogin').addEventListener('click', (e) => {
		e.preventDefault();
		loginForm.classList.remove('form--hidden');
		createAccountForm.classList.add('form--hidden');
	});

	loginForm.addEventListener('submit', (e) => {
		e.preventDefault();

		// Preform your AJAX/Fetch login

		setFormMessage(loginForm, 'error', 'Invalid username or password');
	});

	document.querySelectorAll('.form__input').forEach((inputElement) => {
		inputElement.addEventListener('blur', (e) => {
			if (
				e.target.id === 'signupUsername' &&
				e.target.value.length > 0 &&
				e.target.value.length < 10
			) {
				setInputError(
					inputElement,
					'Username must be atleast 10 characters long'
				);
			}
		});

		inputElement.addEventListener('input', (e) => {
			clearInputError(inputElement);
		});
	});
});

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function () {
	menu.classList.toggle('is-active');
	menuLinks.classList.toggle('active');
});

function showGames() {
	document.querySelector('p').style.display = 'block';
	document.querySelector('h1').style.display = 'block';
	document.querySelector('article').style.display = 'none';
}

document.getElementById('games__logo').ondragstart = function () {
	return false;
};
document.getElementById('space').ondragstart = function () {
	return false;
};
document.getElementById('planet').ondragstart = function () {
	return false;
};
