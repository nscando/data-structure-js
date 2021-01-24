class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class MyDoubleLinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
			prev: null
		}
		this.tail = this.head;
		this.length = 1;
	}
	append(value) {
		const newNode = new Node(value);
		newNode.prev = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;

		this.length++;

		return this;
	}

	prepend(value) {
		const newNode = new Node(value);
		if (this.head) {
			this.head.prev = newNode;
			newNode.next = this.head
		} else {
			this.tail = newNode;
		}

		this.head = newNode;

		this.length++;
		return this;
	}

	deleteFirst() {
		if (!this.head) { return null }

		this.head = this.head.next;
		if (this.head) {
			this.head.prev = null;
		} else {
			this.tail = null;

		}
		this.length--;
		return this;
	}

	deleteLast() {
		if (!this.tail) { return null }
		this.tail = this.tail.prev;
		if (this.tail) {
			this.tail.next = null;
		} else {
			this.head = null;
		}
		this.length--;
		return this;
	}


}
let myDoublyLinkedList = new MyDoubleLinkedList(1);