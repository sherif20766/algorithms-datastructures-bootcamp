import capitalize from "./index";

test("capitalize is a function", () => {
	expect(typeof capitalize).toBe("function");
});

test(" 'a short sentance' returns 'A Short Sentance'", () => {
	expect(capitalize("a short sentance")).toBe("A Short Sentance");
});

test(" 'ThE QUick bRown FoX JUMPED over tHe LAzy dOG'", () => {
	expect(capitalize("ThE QUick bRown FoX JUMPED over tHe LAzy dOG")).toBe(
		"The Quick Brown Fox Jumped Over The Lazy Dog"
	);
});
