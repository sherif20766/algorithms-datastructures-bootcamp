import maxChar from "./index";

test("maxChar is a function", () => {
	expect(typeof maxChar).toEqual("function");
});

test("retrieves most frequently used character", () => {
	expect(maxChar("abcccccccd")).toEqual("c");
});

test("works with numbers", () => {
	expect(maxChar("apple 123111")).toBe("1");
});
