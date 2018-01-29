class Context {
    public output = 0;

    constructor(
        public input: string
    ) {
    }

    startsWith(value: string): boolean {
        return this.input.substr(0, value.length) === value;
    }
}

interface Symbol {
    value: number;
    length: number;
}

class Expression {
    private symbolMap: { [key: string]: Symbol } = {};

    constructor(
        private name: string,
        private one: string,
        private four: string,
        private five: string,
        private nine: string,
        private multiplier: number,
    ) {
        this.symbolMap[this.one] = {
            value: 1,
            length: 1,
        };
        this.symbolMap[this.four] = {
            value: 4,
            length: 2,
        };
        this.symbolMap[this.five] = {
            value: 5,
            length: 1,
        };
        this.symbolMap[this.nine] = {
            value: 9,
            length: 2,
        };
    }

    interpret(context: Context) {
        if (context.input.length === 0) {
            return;
        }

        let symbol: Symbol; 
        if (context.startsWith(this.nine)) {
            this.processSymbolInContext(context, this.nine);
        } else if (context.startsWith(this.four)) {
            this.processSymbolInContext(context, this.four);
        } else if (context.startsWith(this.five)) {
            this.processSymbolInContext(context, this.five);
        }

        while (context.startsWith(this.one)) {
            this.processSymbolInContext(context, this.one);
        }
    }

    private processSymbolInContext(context: Context, symbolKey: string): void {
        const symbol = this.symbolMap[symbolKey];
        context.output += symbol.value * this.multiplier;
        context.input = context.input.substr(symbol.length);
    }
}

function run() {
    const roman = 'MCMXXVIII'
    const context = new Context(roman);
    const tree = [];

    tree.push(new Expression('thousand', 'M', ' ' , ' ', ' ' , 1000));
    tree.push(new Expression('hundred',  'C', 'CD', 'D', 'CM', 100));
    tree.push(new Expression('ten',      'X', 'XL', 'L', 'XC', 10));
    tree.push(new Expression('one',      'I', 'IV', 'V', 'IX', 1));

    tree.forEach(item => item.interpret(context));

    console.log(`${roman} = ${context.output}`);
}
