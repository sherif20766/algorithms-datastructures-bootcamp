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

describe("getFirst", () => {
	const list = new LinkedList();

	test("is a method in the LinkedList class", () => {
		list.insertFirst(1);
		expect(() => {
			list.getFirst();
		}).not.toThrow();
	});

	test("returns the number of items in the LinkedList", () => {
		list.insertFirst(1);
		list.insertFirst(2);
		list.insertFirst(3);
		expect(list.getFirst().data).toEqual(3);

		list.insertFirst(4);
		list.insertFirst(5);
		list.insertFirst(6);
		expect(list.getFirst().data).toEqual(6);
	});
});

describe("getLast", () => {
	const list = new LinkedList();

	test("is a method in the LinkedList class", () => {
		list.insertFirst(1);
		expect(() => {
			list.getLast();
		}).not.toThrow();
	});

	test("returns the number of items in the LinkedList", () => {
		list.insertFirst(1);
		list.insertFirst(2);
		list.insertFirst(3);
		expect(list.getLast().data).toEqual(1);

		list.insertFirst(4);
		list.insertFirst(5);
		list.insertFirst(6);
		expect(list.getLast().data).toEqual(1);
	});
});

describe("clear", () => {
	const list = new LinkedList();

	test("is a method in the LinkedList class", () => {
		expect(() => {
			list.clear();
		}).not.toThrow();
	});

	test("clears the linkedList", () => {
		list.insertFirst(1);
		list.insertFirst(1);
		list.insertFirst(1);
		expect(list.size()).toEqual(3);

		list.insertFirst(1);
		list.insertFirst(1);
		list.insertFirst(1);
		expect(list.size()).toEqual(6);

		list.clear();
		expect(list.size()).toEqual(0);
	});
});

describe("removeFirst", () => {
	const list = new LinkedList();

	test("is a method in the LinkedList class", () => {
		list.insertFirst(1);
		expect(() => {
			list.removeFirst();
		}).not.toThrow();
	});

	test("removes the first node", () => {
		list.insertFirst(1);
		list.insertFirst(2);
		list.insertFirst(3);
		expect(list.getFirst().data).toEqual(3);

		list.removeFirst();
		expect(list.getFirst().data).toEqual(2);
	});
});

describe("removeLast", () => {
	test("can run the method when list is empty", () => {
		const list = new LinkedList();
		list.insertFirst(1);
		expect(() => {
			list.removeLast();
		}).not.toThrow();
	});

	test("removes the last node when list length is 1", () => {
		const list = new LinkedList();
		list.insertFirst(1);
		list.removeLast();
		expect(list.head).toEqual(null);
	});
	test("removes the last node when list length is 2", () => {
		const list = new LinkedList();
		list.insertFirst(1);
		list.insertFirst(2);
		list.removeLast();
		expect(list.size()).toEqual(1);
		expect(list.getLast().data).toEqual(2);
	});

	test("removes the last node when list length is 3", () => {
		const list = new LinkedList();
		list.insertFirst(1);
		list.insertFirst(2);
		list.insertFirst(3);
		list.removeLast();
		expect(list.size()).toEqual(2);
		expect(list.getLast().data).toEqual(2);
	});
});
