interface Singleton {
	instantiate(): () => object;
}

function initSingleton(): Singleton {
	let instance;

	return {
		instantiate() {
            instance = instance || new Object('I am the instance');
            return instance;
		}
	};
}

function run() {
	const singleton = initSingleton();
    const instance1 = singleton.instantiate();
    const instance2 = singleton.instantiate();
 
    console.log(`Same instance? ${instance1 === instance2}`);  
}
