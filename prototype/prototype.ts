class Customer {
	constructor(
		public first: string,
		public last: string,
		public status: string,
	) {
	}

	public say() {
		console.log(`name: ${this.first} ${this.last}, status: ${this.status}`);
	}
}

class CustomerPrototype {
	constructor(
		private proto: Customer,
	) {
	}

	public clone(): Customer {
		const { first, last, status } = this.proto;
		return new Customer(first, last, status);
	}
}

function run() {
    const proto = new Customer('n/a', 'n/a', 'pending');
    const prototype = new CustomerPrototype(proto);
    const customer = prototype.clone();
    customer.say();
}
