import steps from "./index";

beforeEach(() => {
	jest.spyOn(console, "log");
});

afterEach(() => {
	console.log.mockRestore();
});

test("Expect steps to be defined", () => {
	expect(steps).toBeDefined();
});

test("Steps called with n = 1", () => {
	steps(1);
	expect(console.log.mock.calls[0][0]).toBe("#");
	expect(console.log.mock.calls.length).toBe(1);
});

test("Steps called with n = 3", () => {
	steps(3);
	expect(console.log.mock.calls[0][0]).toBe("#  ");
	expect(console.log.mock.calls[1][0]).toBe("## ");
	expect(console.log.mock.calls[2][0]).toBe("###");
	expect(console.log.mock.calls.length).toBe(3);
});

test("Steps called with n = 5", () => {
	steps(5);
	expect(console.log.mock.calls[0][0]).toBe("#    ");
	expect(console.log.mock.calls[1][0]).toBe("##   ");
	expect(console.log.mock.calls[2][0]).toBe("###  ");
	expect(console.log.mock.calls[3][0]).toBe("#### ");
	expect(console.log.mock.calls[4][0]).toBe("#####");
	expect(console.log.mock.calls.length).toBe(5);
});
