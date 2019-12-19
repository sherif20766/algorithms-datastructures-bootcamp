// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = str => {
	const charMap = {};
	let count = 0;
	let max = "";

	for (let char of str) {
		if (!charMap[char]) {
			charMap[char] = 1;
		} else {
			charMap[char]++;
		}
	}
	for (let char in charMap) {
		if (charMap[char] > count) {
			count = charMap[char];
			max = char;
		}
	}

	return max;
};

export default maxChar;
