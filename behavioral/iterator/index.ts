class Iterator {
    private index = 0;

    constructor(
        private itemList: any[],
    ) {
    }

    first() {
        this.reset();
        return this.next();
    }

    next() {
        return this.itemList[this.index++];
    }

    hasNext() {
        return this.index <= this.itemList.length;
    }

    reset() {
        this.index = 0;
    }

    each(callback: Function) {
        for (let item = this.first(); this.hasNext(); item = this.next()) {
            callback(item);
        }
    }
}

function run() {
    const items = [ 'one', 2, 'circle', true, 'Applepie' ];
    const iterator = new Iterator(items);
 
    // using for loop
 
    for (let item = iterator.first(); iterator.hasNext(); item = iterator.next()) {
        console.log(item);
    }
 
    // using Iterator's `each` method
 
    iterator.each(item => console.log(item));
}
