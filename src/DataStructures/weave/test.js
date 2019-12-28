import Queue from "./queue";
import weave from "./index";

test("Queue is a class", () => {
	expect(typeof Queue.prototype.constructor).toEqual("function");
});

test("Queue can add records", () => {
	const q = new Queue();

	expect(() => {
		q.add(1);
	}).not.toThrow();
});

test("Queue can remove records", () => {
	const q = new Queue();
	expect(() => {
		q.add(1);
		q.remove();
	}).not.toThrow();
});

test("Queue maintains order of records", () => {
	const q = new Queue();

	q.add(1);
	q.add(2);
	q.add(3);

	expect(q.remove()).toEqual(1);
	expect(q.remove()).toEqual(2);
	expect(q.remove()).toEqual(3);
});

test("Queue peek method returns last element without returning it", () => {
	const q = new Queue();

	q.add(1);
	q.add(2);
	q.add(3);

	expect(q.peek()).toEqual(1);
	expect(q.data.length).toEqual(3);
	expect(q.remove()).toEqual(1);
	expect(q.peek()).toEqual(2);
	expect(q.data.length).toEqual(2);
	expect(q.remove()).toEqual(2);
	expect(q.peek()).toEqual(3);
	expect(q.data.length).toEqual(1);
	expect(q.remove()).toEqual(3);
});

test("weave is a function", () => {
	expect(typeof weave).toEqual("function");
});

test("weave can combine two queues", () => {
	const one = new Queue();
	const two = new Queue();

	one.add(1);
	one.add(2);
	one.add(3);

	two.add("one");
	two.add("two");
	two.add("three");

	const three = weave(one, two);

	expect(three.remove()).toBe(1);
	expect(three.remove()).toBe("one");
	expect(three.remove()).toBe(2);
	expect(three.remove()).toBe("two");
	expect(three.remove()).toBe(3);
	expect(three.remove()).toBe("three");

	expect(three.remove()).toBeUndefined();
});
