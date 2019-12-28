import pyramid from "./index";

beforeEach(() => {
	jest.spyOn(console, "log");
});

afterEach(() => {
	console.log.mockRestore();
});

test("pyramid is defined", () => {
	expect(pyramid).toBeDefined();
});

test("pyramid created with n = 1", () => {
	pyramid(1);
	expect(console.log.mock.calls[0][0]).toBe("#");
});

test("pyramid created with n = 2", () => {
	pyramid(2);
	expect(console.log.mock.calls[0][0]).toBe(" # ");
	expect(console.log.mock.calls[1][0]).toBe("###");
});

test("pyramid created with n = 3", () => {
	pyramid(3);
	expect(console.log.mock.calls[0][0]).toBe("  #  ");
	expect(console.log.mock.calls[1][0]).toBe(" ### ");
	expect(console.log.mock.calls[2][0]).toBe("#####");
});
