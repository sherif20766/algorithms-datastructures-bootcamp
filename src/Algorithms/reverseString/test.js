import reverse from "./index";

test("reverse is defined", () => {
	expect(reverse("string")).toBeDefined();
});

test("reverse function reverses a string", () => {
	expect(reverse("string")).toEqual("gnirts");
});

test("reverse function reverses a string", () => {
	expect(reverse("  abcd")).toEqual("dcba  ");
});
