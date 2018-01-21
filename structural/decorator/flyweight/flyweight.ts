class Flyweight {
    constructor(
        private make: string,
        private model: string,
        private processor: string,
    ) {
    }

    getMake(): string {
        return this.make;
    }
}

class FlyWeightFactory {
    private static flyweights: { [key: string]: Flyweight } = {};
 
    static get(make: string, model: string, processor: string) {
        const foo = make + model;
        if (!FlyWeightFactory.flyweights[foo]) {
            FlyWeightFactory.flyweights[foo] = new Flyweight(make, model, processor);
        }
        return FlyWeightFactory.flyweights[foo];
    }

    static getCount() {
        return Object.keys(FlyWeightFactory.flyweights).length;
    }
}

class ComputerCollection {
    private static computers: { [tag: string]: Computer} = {};
 
    add(
        make: string,
        model: string,
        processor: string,
        memory: string,
        tag: string,
    ) {
        ComputerCollection.computers[tag] = new Computer(make, model, processor, memory, tag);
    }

    get(tag: string): Computer {
        return ComputerCollection.computers[tag];
    }

    getCount(): number {
        return Object.keys(ComputerCollection.computers).length;
    }
}

class Computer {
    private flyweight: Flyweight;

    constructor(
        private make: string,
        private model: string,
        private processor: string,
        private memory: string,
        private tag: string,
    ) {
        this.flyweight = FlyWeightFactory.get(make, model, processor);
    }

    getMake(): string {
        return this.flyweight.getMake();
    }
}

function run() {
    const computers = new ComputerCollection();

    computers.add('Dell', 'Studio XPS', 'Intel', '5G', 'Y755P');
    computers.add('Dell', 'Studio XPS', 'Intel', '6G', 'X997T');
    computers.add('Dell', 'Studio XPS', 'Intel', '2G', 'U8U80');
    computers.add('Dell', 'Studio XPS', 'Intel', '2G', 'NT777');
    computers.add('Dell', 'Studio XPS', 'Intel', '2G', '0J88A');
    computers.add('HP', 'Envy', 'Intel', '4G', 'CNU883701');
    computers.add('HP', 'Envy', 'Intel', '2G', 'TXU003283');

    console.log(`Computers: ${computers.getCount()}`);
    console.log(`Flyweights: ${FlyWeightFactory.getCount()}`);
}
