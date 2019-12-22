import vowels from "./index";

test("vowels is a function", () => {
	expect(typeof vowels).toEqual("function");
});

test("'hi there' returns 3", () => {
	expect(vowels("12345678")).toEqual(0);
});

test("'hi there' returns 3", () => {
	expect(vowels("hi there")).toEqual(3);
});

test("returns the number of vowels used", () => {
	expect(vowels("bcdfghjkl")).toEqual(0);
});
