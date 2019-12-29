import Stack from "./index";

test("Stack is a class", () => {
	expect(typeof Stack.prototype.constructor).toEqual("function");
});

test("Stack has a push, pop and peek methods", () => {
	const s = new Stack();

	expect(s.push).toBeDefined();
	expect(s.pop).toBeDefined();
	expect(s.peek).toBeDefined();
});

test("push method adds record", () => {
	const s = new Stack();

	s.push(1);
	expect(s.peek()).toEqual(1);
	s.push(2);
	expect(s.peek()).toEqual(2);
});

test("stack can follows first in, last out", () => {
	const s = new Stack();
	s.push(1);
	s.push(2);
	s.push(3);
	expect(s.pop()).toEqual(3);
	expect(s.pop()).toEqual(2);
	expect(s.pop()).toEqual(1);
});

test("peek returns the first element but doesnt pop it", () => {
	const s = new Stack();
	s.push(1);
	s.push(2);
	s.push(3);
	expect(s.peek()).toEqual(3);
	expect(s.pop()).toEqual(3);
	expect(s.peek()).toEqual(2);
	expect(s.pop()).toEqual(2);
	expect(s.peek()).toEqual(1);
	expect(s.pop()).toEqual(1);
});
