class Mortgage {
    constructor(
        public name: string,
    ) {
    }

    applyFor(amount: string): string {
        let result = 'approved';
        if (!Bank.verify(this.name, amount)) {
            result = 'denied';
        } else if (!Credit.get(this.name)) {
            result = 'denied';
        } else if (!Background.check(this.name)) {
            result = 'denied';
        }

        return `${this.name} has been ${result} for a ${amount} mortgage`;
    }
}
 
class Bank {
    static verify(name: string, amount: string): boolean {
        return true;
    }
}
 
class Credit {
    static get(name: string): boolean {
        return true;
    }
}
 
class Background {
    static check(name: string): boolean {
        return true;
    }
}
 
function run() {
    const mortgage = new Mortgage('Joan Templeton');
    const result = mortgage.applyFor('$100.000');
 
    console.log(result);
}
