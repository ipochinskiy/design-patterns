interface Packet {
    from: string;
    to: string;
    weight: string;
}

abstract class Company {
    abstract calculate(packet: Packet);
}

class UPS extends Company {
    calculate(packet: Packet) {
        // calculations...
        return '$45.95';
    }
}

class USPS extends Company {
    calculate(packet: Packet) {
        // calculations...
        return '$39.40';
    }
}

class Fedex extends Company {
    calculate(packet: Packet) {
        // calculations...
        return '$43.20';
    }
}

class Shipping {
    private company: Company = null;

    setStrategy(company: Company) {
        this.company = company;
    }

    calculate(packageObkect: Packet) {
        return this.company.calculate(packageObkect);
    }
}

function run() {
    const packet: Packet = {
        from: '76712',
        to: '10012',
        weight: 'lkg',
    };
 
    // the 3 strategies
 
    const ups = new UPS();
    const usps = new USPS();
    const fedex = new Fedex();
 
    const shipping = new Shipping();
 
    shipping.setStrategy(ups);
    console.log(`UPS Strategy: ${shipping.calculate(packet)}`);

    shipping.setStrategy(usps);
    console.log(`USPS Strategy: ${shipping.calculate(packet)}`);

    shipping.setStrategy(fedex);
    console.log(`Fedex Strategy: ${shipping.calculate(packet)}`);
}
