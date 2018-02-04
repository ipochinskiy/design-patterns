abstract class Visitor {
    public abstract visit(emp: Employee);
}

class ExtraSalary {
    public visit(emp: Employee) {
        emp.setSalary(emp.getSalary() * 1.1);
    };
}

class ExtraVacation {
    public visit(emp: Employee) {
        emp.setVacation(emp.getVacation() + 2);
    };
}

class Employee {
    constructor(
        private name: string,
        private salary: number,
        private vacation: number,
    ) {
    }
        
    accept(visitor: Visitor) {
        visitor.visit(this);
    };
 
    getName() {
        return this.name;
    };
 
    getSalary() {
        return this.salary;
    };
 
    setSalary(sal: number) {
        this.salary = sal;
    };
 
    getVacation() {
        return this.vacation;
    };
 
    setVacation(vac: number) {
        this.vacation = vac;
    };
}

function run() {
    const employees = [
        new Employee('John', 10000, 10),
        new Employee('Mary', 20000, 21),
        new Employee('Boss', 250000, 51)
    ];
 
    const visitorSalary = new ExtraSalary();
    const visitorVacation = new ExtraVacation();

    employees.forEach((emp: Employee) => {
        emp.accept(visitorSalary);
        emp.accept(visitorVacation);
        console.log('${emp.getName()}: $${emp.getSalary()} and ${emp.getVacation()} vacation days');
    });
}
