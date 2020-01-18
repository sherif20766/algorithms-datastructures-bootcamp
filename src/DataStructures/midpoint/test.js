import { Node, LinkedList } from "./linkedList";
import midpoint from "./index";

test("midpoint is a function", () => {
	expect(typeof midpoint).toEqual("function");
});

describe("midpoint returns the middle node of an odd numbered list", () => {
	const list = new LinkedList();

	test("when the list has 5 elements", () => {
		list.insertLast(1);
		list.insertLast(2);
		list.insertLast(3);
		list.insertLast(4);
		list.insertLast(5);

		expect(midpoint(list).data).toEqual(3);
	});
	test("when the list has 7 elements", () => {
		list.insertLast(6);
		list.insertLast(7);

		expect(midpoint(list).data).toEqual(4);
	});
});

describe("midpoint returns the middle node of an even numbered list", () => {
	const list = new LinkedList();

	test("when the list has 2 elements", () => {
		list.insertLast(1);
		list.insertLast(2);

		expect(midpoint(list).data).toEqual(1);
	});
	test("when the list has 4 elements", () => {
		list.insertLast(3);
		list.insertLast(4);

		expect(midpoint(list).data).toEqual(2);
	});
});
