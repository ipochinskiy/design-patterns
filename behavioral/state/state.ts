abstract class State {
    constructor(
        protected light: TrafficLight,
    ) {
    }

    abstract go();
}

class Red extends State {
    go() {
        console.log("Red --> for 1 minute");
        this.light.change(new Green(this.light));
    }
}

class Yellow extends State {
    go() {
        console.log("Yellow --> for 10 seconds");
        this.light.change(new Red(this.light));
    }
}

class Green extends State {
    go() {
        console.log("Green --> for 1 minute");
        this.light.change(new Yellow(this.light));
    }
}

class TrafficLight {
    private count = 0;
    private currentState: State;

    constructor() {
        this.currentState = new Red(this);
    }
 
    change(state: State) {
        // limits number of changes
        if (this.count++ >= 10) return;
        this.currentState = state;
        this.currentState.go();
    };
 
    start() {
        this.currentState.go();
    };
}

function run() {
    const light = new TrafficLight();
    light.start();
}
