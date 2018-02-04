abstract class Datastore {
    protected abstract connect();

    protected abstract select();

    protected abstract disconnect();

    process() {
        this.connect();
        this.select();
        this.disconnect();
        return true;
    }
}

class MySql extends Datastore {
    connect() {
        console.log('MySQL: connect step');
    }

    select() {
        console.log('MySQL: select step');
    }

    disconnect() {
        console.log('MySQL: disconnect step');
    }
}

function run() {
    const mySql = new MySql();
    mySql.process();
}
