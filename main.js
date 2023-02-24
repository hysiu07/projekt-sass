const btnBurger = document.querySelector('.nav-btn');
const menuSide = document.querySelector('.nav-items');
const burgerIcon = document.querySelector('i')
console.log(burgerIcon);

// const btnInsideMenu = document.querySelector('.menu-side-btn');

const showMenu = () => {
	menuSide.classList.toggle('show');
	checkBurgerBtn()
};

const checkBurgerBtn = () => {
	if(menuSide.classList.contains('show')){
		console.log(true);
		burgerIcon.style.color = '#fff'
		// btnBurger.innerHTML = '<i class="fa-solid fa-xmark"></i>'

		
	}else{
		burgerIcon.style.color = '#1ba4ce'
		// btnBurger.innerHTML = '<i class="fa-solid fa-bars"></i>'
	}
}


btnBurger.addEventListener('click', showMenu);


// ---------

const inputs = document.getElementsByClassName('form-element');
const btnSubmit = document.querySelector('.btn-form');
const errorText = document.querySelector('.form-error');

const createUser = (user) => {
	console.log(user);

	

	fetch('https://akademia108.pl/api/ajax/post-appointment.php', {
		headers: {
			'Content-Type': 'application/json',
		},
		mode: 'cors',
		method: 'POST',
		body: JSON.stringify(user),
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			errorText.textContent = `Dziękujemy za zapisanie się na wizytę! ${user.name}`
			errorText.classList.add('send')

			
		}
		
	
		
	
		)
};

const sendForm = (e) => {
	e.preventDefault();
	let readyInputs = false;
	const user = {
		name: document.querySelector('#name').value,
		mail: document.querySelector('#email').value,
		service: document.querySelector('#service').value,
		phone: document.querySelector('#phone-number').value,
		date: document.querySelector('#date').value,
		time: document.querySelector('#time').value,
		message: document.querySelector('#notes').value,
	};

	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].value === '') {
			inputs[i].classList.add('error');
			errorText.textContent = 'Uzupełnij wszystkie pola!';
			readyInputs = false;
		} else {
			inputs[i].classList.remove('error');
			errorText.textContent = '';
			readyInputs = true;
		}
		console.log(readyInputs);
	}

	if (readyInputs) {
		createUser(user);
	}
};

btnSubmit.addEventListener('click', sendForm);

// fetch('https://akademia108.pl/api/ajax/post-appointment.php')
// .then(res => res.json)
// .then(data => {

// }
// )
