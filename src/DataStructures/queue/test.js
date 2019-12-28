import Queue from "./index";

test("Queue is a class", () => {
	expect(typeof Queue.prototype.constructor).toEqual("function");
});

test("Can add records to Queue", () => {
	const q = new Queue();

	expect(() => {
		q.add(1);
	}).not.toThrow();
});

test("Can remove records from Queue", () => {
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
