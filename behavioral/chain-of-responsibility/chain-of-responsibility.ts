class MyRequest {
    constructor(
        private amount: number
    ) {
        console.log(`Requested: $${amount}\n`);
    }

    get(bill: number): MyRequest {
        const count = Math.floor(this.amount / bill);
        this.amount -= count * bill;
        console.log(`Dispence ${count} $${bill} bills`);
        return this;
    }
}

function run() {
    const request = new MyRequest(378);
    request.get(100).get(50).get(20).get(10).get(5).get(1);
}
