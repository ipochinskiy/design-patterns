const add = (x: number, y: number) => x + y;
const sub = (x: number, y: number) => x - y;
const mul = (x: number, y: number) => x * y;
const div = (x: number, y: number) => x / y;
 
class Command {
    constructor(
        public name: string,
        public execute: (x: number, y: number) => number,
        public undo,
        public value: number,
    ) {
    }
}
 
class AddCommand extends Command {
    constructor(value: number) {
        super('add', add, sub, value);
    }
}

class SubCommand extends Command {
    constructor(value: number) {
        super('sub', sub, add, value);
    }
}

class MulCommand extends Command {
    constructor(value: number) {
        super('mul', mul, div, value);
    }
}

class DivCommand extends Command {
    constructor(value: number) {
        super('div', div, mul, value);
    }
}

class Calculator {
    private current = 0;
    private commands: Command[] = [];
 
    execute(command: Command) {
        this.current = command.execute(this.current, command.value);
        this.commands.push(command);
        console.log(`${this.getCommandName(command)}: ${command.value}`);
    }

    undo() {
        const command = this.commands.pop();
        this.current = command.undo(this.current, command.value);
        console.log(`Undo ${this.getCommandName(command)}: ${command.value}`);
    }

    getCurrentValue(): number {
        return this.current;
    }
 
    private getCommandName({ name = '' } = {}): string {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
}
 
function run() {
    const calculator = new Calculator();
 
    calculator.execute(new AddCommand(100));
    calculator.execute(new SubCommand(24));
    calculator.execute(new MulCommand(6));
    calculator.execute(new DivCommand(2));
 
    calculator.undo();
    calculator.undo();
 
    console.log(`Value: ${calculator.getCurrentValue()}`);
}
