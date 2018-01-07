abstract class AbstractVehicle {
	abstract addParts(): void;
	abstract say(): void;
}

class Car extends AbstractVehicle {
	private doors = 0;

	public addParts() {
		this.doors = 4;
	}

	public say() {
        console.log(`I am a ${this.doors}-door car`);
    }
}

class Truck extends AbstractVehicle {
	private doors = 0;

	public addParts() {
		this.doors = 2;
	}

	public say() {
        console.log(`I am a ${this.doors}-door truck`);
    }
}

abstract class AbstractBuilder {
	abstract step1(): void;
	abstract step2(): void;
	abstract get(): AbstractVehicle;
}

class CarBuilder extends AbstractBuilder {
	private car: Car = null;

	public step1() {
		this.car = new Car();
	}

	public step2() {
		this.car.addParts();
	}

	public get(): Car {
		return this.car;
	}
}

class TruckBuilder extends AbstractBuilder {
	private truck: Truck = null;

	public step1() {
		this.truck = new Truck();
	}

	public step2() {
		this.truck.addParts();
	}

	public get(): Truck {
		return this.truck;
	}
}

class Shop {
	public construct(builder): AbstractVehicle {
		builder.step1();
		builder.step2();
		return builder.get();
	}
}

function run() {
    const carBuilder = new CarBuilder();
    const truckBuilder = new TruckBuilder();

    const shop = new Shop();
    const car: Car = <Car>shop.construct(carBuilder);
    const truck: Truck = <Truck>shop.construct(truckBuilder);
 
    car.say();
    truck.say();
}
