import reverseInt from "./index";

test("reverseInt is a function", () => {
	expect(typeof reverseInt).toEqual("function");
});

test("reverseInt handles 0 as an input", () => {
	expect(reverseInt(0)).toEqual(0);
});

test("reverseInt handles a positive number as an input", () => {
	expect(reverseInt(12)).toEqual(21);
});

test("reverseInt handles a negative number as an input", () => {
	expect(reverseInt(-69)).toEqual(-96);
});
