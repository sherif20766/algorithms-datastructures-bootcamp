import { Node, LinkedList } from "./index";

test("node is a class", () => {
	expect(typeof Node.prototype.constructor).toEqual("function");
});

test("list is a class", () => {
	expect(typeof LinkedList.prototype.constructor).toEqual("function");
});

describe("A Node", () => {
	test("Node has properties data and next", () => {
		const node = new Node("a", "b");

		expect(node.data).toEqual("a");
		expect(node.next).toEqual("b");
	});
});

describe("A List", () => {
	test("has a `head` property initialized to `null`", () => {
		const list = new LinkedList();

		expect(list.head).toEqual(null);
	});
});

describe("insertFirst", () => {
	const list = new LinkedList();

	test("is a method in the LinkedList class", () => {
		expect(() => {
			list.insertFirst("abd");
		}).not.toThrow();
	});

	test("correctly assigns the `data` argument to the head property", () => {
		list.insertFirst(1);
		expect(list.head.data).toEqual(1);
		list.insertFirst(2);
		expect(list.head.data).toEqual(2);
	});
});

describe("Size", () => {
	const list = new LinkedList();

	test("is a method in the LinkedList class", () => {
		expect(() => {
			list.size();
		}).not.toThrow();
	});

	test("returns the number of items in the LinkedList", () => {
		list.insertFirst(1);
		list.insertFirst(1);
		list.insertFirst(1);
		expect(list.size()).toEqual(3);

		list.insertFirst(1);
		list.insertFirst(1);
		list.insertFirst(1);
		expect(list.size()).toEqual(6);
	});
});
