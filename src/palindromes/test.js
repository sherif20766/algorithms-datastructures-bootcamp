import palindrome from "./index";

test("palindrome is defined", () => {
	expect(palindrome).toBeDefined();
});

test("abba is a palindrome", () => {
	expect(palindrome("abba")).toBeTruthy();
});

test("abcdefg is not a palindrome", () => {
	expect(palindrome("abcdefg")).toBeFalsy();
});

test("1000 is not a palindrome", () => {
	expect(palindrome("1000")).toBeFalsy();
});

test("999 is not a palindrome", () => {
	expect(palindrome("999")).toBeTruthy();
});
