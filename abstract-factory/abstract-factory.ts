abstract class AbstractProduct {
	abstract say();
}

class Employee extends AbstractProduct {
	constructor(private name: string) {
		super();
	}

	public say() {
		console.log(`I am employee ${this.name}`);
	}
}

class Vendor extends AbstractProduct {
	constructor(private name: string) {
		super();
	}

	public say() {
		console.log(`I am vendor ${this.name}`);
	}
}

abstract class AbstractFactory {
	abstract create(name: string): object;
}

class EmployeeFactory extends AbstractFactory {
	public create(name: string) {
		return new Employee(name);
	}
}

class VendorFactory extends AbstractFactory {
	public create(name: string) {
		return new Vendor(name);
	}
}

function run() {
    const employeeFactory = new EmployeeFactory();
    const vendorFactory = new VendorFactory();

    const persons = [
    	employeeFactory.create('Joan DiSilva'),
		employeeFactory.create('Tim O\'Neill'),
		vendorFactory.create('Gerald Watson'),
		vendorFactory.create('Nicole McNight'),
    ];

    persons.forEach(person => person.say());
}
