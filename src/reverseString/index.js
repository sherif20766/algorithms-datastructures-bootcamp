// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const reverse = str => {
	return str
		.split("")
		.reverse()
		.join("");
};

// alternative solution
// const reverse = str => {
//	 return str.split("").reduce((a, b) => b + a);
// };

export default reverse;
