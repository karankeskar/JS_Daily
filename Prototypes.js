// Design a class for employee which takes id and name during construction of object and has salary property using prototypes

var Employee = function (id, name){
        if(!id || !name){
            throw new Error("Employee ID and name is mandatory")
        }
        this.id = id;
        this.name = name;
}
    Employee.prototype.setSalary = function(salary){
        this.salary = salary;
    }
    Employee.prototype.getSalary= function(){
        return this.salary
    }
    Employee.prototype.getId=function(){
        return this.id;
    }
    Employee.prototype.getName=function(){
        return this.name;
    }



// Design a manager's class which is employee and can have deparatment property

var Manager = function(params){
    Employee.apply(this, arguments)
}

    Manager.prototype = Object.create(Employee.prototype);
    Manager.prototype.constructor = Manager;

    Manager.prototype.setDepartment = function(department){
        this.department = department;
    }
    Manager.prototype.getDepartment = function(){
        return this.department
    }


const emp = new Employee(1, "Karan")
emp.setSalary(1000);
console.log(emp.getSalary());
console.log(emp)
const manager = new Manager(2, "Keskar");
console.log(manager.setDepartment("Software Engineer"))
console.log(manager.setSalary(1000));
console.log(manager)