class Person {
    constructor(
        public name: string,
        private street: string,
        private city: string,
        private state: string) {
    }

    hydrate(): string {
        const memento = JSON.stringify(this);
        return memento;
    }
 
    dehydrate(memento: string): void {
        let m: any;
        try {
            m = JSON.parse(memento);
        } catch (e) {
            console.error(`Could not dehydrate state: "${memento}"`);
            return;
        }

        this.name = m.name;
        this.street = m.street;
        this.city = m.city;
        this.state = m.state;
    }
}

class CareTaker {
    private mementos: { [key: number]: string } = {};

    add(key: number, memento: string) {
        this.mementos[key] = memento;
    }

    get(key: number) {
        return this.mementos[key];
    }
}

function run() {
    const mike = new Person('Mike Foley', '1112 Main', 'Dallas', 'TX');
    const john = new Person('John Wang', '48th Street', 'San Jose', 'CA');
    const caretaker = new CareTaker();
 
    // save state
 
    caretaker.add(1, mike.hydrate());
    caretaker.add(2, john.hydrate());
 
    // mess up their names
 
    mike.name = 'King Kong';
    john.name = 'Superman';
 
    // restore original state
 
    mike.dehydrate(caretaker.get(1));
    john.dehydrate(caretaker.get(2));
 
    console.log(mike.name);
    console.log(john.name);
}
