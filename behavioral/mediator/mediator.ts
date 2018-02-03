class Participant {
    public chatroom = null;

    constructor(
        public name: string,
    ) {
    }

    send(message: string, to?: Participant) {
        this.chatroom.send(message, this, to);
    }

    receive(message: string, from: Participant) {
        console.log(`${from.name} to ${this.name}: message`);
    }
}

class Chatroom {
    private participants: { [name: string]: Participant } = {};
 
    register(participant: Participant) {
        this.participants[participant.name] = participant;
        participant.chatroom = this;
    }

    send(message: string, from: Participant, to?: Participant) {
        if (to) {
            // single message
            to.receive(message, from);
            return;
        }

        // broadcast message
        Object.keys(this.participants)
            .filter(name => name !== from.name)
            .forEach(name => {
                const participant = this.participants[name];
                participant.receive(message, from)
            });
    }
}

function run() {
    let yoko = new Participant('Yoko');
    let john = new Participant('John');
    let paul = new Participant('Paul');
    let ringo = new Participant('Ringo');
 
    let chatroom = new Chatroom();
    chatroom.register(yoko);
    chatroom.register(john);
    chatroom.register(paul);
    chatroom.register(ringo);
 
    yoko.send('All you need is love.');
    yoko.send('I love you John.');
    john.send('Hey, no need to broadcast', yoko);
    paul.send('Ha, I heard that!');
    ringo.send('Paul, what do you think?', paul);
}
