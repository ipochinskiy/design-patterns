// input devices

abstract class Abstraction {
	constructor(
		protected output: Implementor,
	) {
	}
}

class Gestures extends Abstraction {
	public tap() {
		this.output.click();
	}

	public swipe() {
		this.output.move();
	}

	public pan() {
		this.output.drag();
	}

	public pinch() {
		this.output.zoom();
	}
}

class Mouse extends Abstraction {
	public click() {
		this.output.click();
	}

	public move() {
		this.output.move();
	}

	public down() {
		this.output.drag();
	}

	public wheel() {
		this.output.zoom();
	}
}

// output devices

abstract class Implementor {
	abstract click();
	abstract move();
	abstract drag();
	abstract zoom();
}

class MyScreen extends Implementor {
	public click() {
		console.log('Screen select');
	}

	public move() {
		console.log('Screen move');
	}

	public drag() {
		console.log('Screen drag');
	}

	public zoom() {
		console.log('Screen zoom in');
	}
}

class MyAudio extends Implementor {
	public click() {
		console.log('Sound oink');
	}

	public move() {
		console.log('Sound waves');
	}

	public drag() {
		console.log('Sound screetch');
	}

	public zoom() {
		console.log('Sound volume up');
	}
}

function run() {
	const screen: Implementor = new MyScreen();
    const audio: Implementor = new MyAudio();
 
    const hand = new Gestures(screen);
    const mouse = new Mouse(audio);
 
    hand.tap();
    hand.swipe();
    hand.pinch();
 
    mouse.click();
    mouse.move();
    mouse.wheel();
}
