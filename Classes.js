// Design a class for employee which takes id and name during construction of object and has salary property

class Employee{
    constructor(id, name){
        if(!id || !name){
            throw new Error("Employee ID and name is mandatory")
        }
        this.id = id;
        this.name = name;
    }

    setSalary(salary){
        this.salary = salary;
    }
    getSalary(){
        return this.salary
    }
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
}

const emp = new Employee(1, "Karan")
emp.setSalary(1000);
console.log(emp.getSalary());
console.log(emp)

// Design a manager's class which is employee and can have deparatment property

class Manager extends Employee{
    setDepartment(department){
        this.department = department;
    }
    getDepartment(){
        return this.department
    }
}

const manager = new Manager(2, "Keskar");
console.log(manager.setDepartment("Software Engineer"))
console.log(manager)