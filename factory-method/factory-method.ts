class Employee {
	protected type: string;
	protected hourly: string;

	say() {
		console.log(`${this.type}: rate ${this.hourly}/hour`);
	}
}

class FullTime extends Employee {
	constructor(type) {
		super();
		this.type = type;
		this.hourly = '$12';
	}
}

class PartTime extends Employee {
	constructor(type) {
		super();
		this.type = type;
		this.hourly = '$11';
	}
}

class Temporary extends Employee {
	constructor(type) {
		super();
		this.type = type;
		this.hourly = '$10';
	}
}

class Contractor extends Employee {
	constructor(type) {
		super();
		this.type = type;
		this.hourly = '$15';
	}
}

class Factory {
	public createEmployee(type: string): Employee {
		switch (type) {
			case 'fulltime': return new FullTime(type);
			case 'parttime': return new PartTime(type);
			case 'temporary': return new Temporary(type);
			case 'contractor': return new Contractor(type);
		}
	}
}

function run() {
    const factory = new Factory();
    const employees: Employee[] = [
	    factory.createEmployee("fulltime"),
		factory.createEmployee("parttime"),
		factory.createEmployee("temporary"),
		factory.createEmployee("contractor"),
	];
 
    employees.forEach(employee => employee.say());
}
