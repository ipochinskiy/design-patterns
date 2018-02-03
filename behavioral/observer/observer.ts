class Click {
    private handlers: Function[] = [];

    subscribe(fn: Function) {
        this.handlers.push(fn);
    }

    unsubscribe(fn: Function) {
        const index = this.handlers.indexOf(fn);
        if (index > -1) {
            this.handlers.splice(index, 1);
        }
    }

    fire(event: string, context = window) {
        this.handlers.forEach(item => item.call(context, event));
    }
}

function run() {
    const clickHandler = item => console.log(`fired: ${item}`);
 
    const click = new Click();
 
    click.subscribe(clickHandler);
    click.fire('event #1');

    click.unsubscribe(clickHandler);
    click.fire('event #2');

    click.subscribe(clickHandler);
    click.fire('event #3');
}
