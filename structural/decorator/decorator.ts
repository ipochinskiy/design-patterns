class User {
    constructor(
        public name: string
    ) {
    }
 
    say() {
        console.log(`User: ${this.name}`);
    }
}

class DecoratedUser {
    private name: string;

    constructor(
        private user: User,
        private street: string,
        private city: string,
    ) {
        this.name = this.user.name;
    }
 
    say() {
        console.log(`Decorated User: ${this.name}, ${this.street}, ${this.city}`);
    }
}
 
function run() {
    const user = new User('Kelly');
    user.say();
 
    const decorated = new DecoratedUser(user, 'Broadway', 'New York');
    decorated.say();
}