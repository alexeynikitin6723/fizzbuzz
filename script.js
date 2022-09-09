const fizzBuzz = (number) => {
	if (number % 3 != 0 && number % 5 != 0) {
		return number;
	} else {
		let str = '';
		if (number % 3 == 0) {
			str += 'Fizz';
		}
		if (number % 5 == 0) {
			str += 'Buzz';
		}
		return str;
	}
}

const arrayFromOneToOneHundred = () => {
	for (let i = 1; i <= 100; i++) {
		console.log(fizzBuzz(i));
	}
}

arrayFromOneToOneHundred();