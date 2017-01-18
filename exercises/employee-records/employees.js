var employees = new Array();

function Employee (empName, empTitle, empSalary) {
    this.name = empName;
    this.title = empTitle;
    this.salary = empSalary;
    this.status = "Full Time";
    this.printEmployeeForm = function() {
        console.log(
            "Name: " + this.name + ", Salary: " + this.salary + ", Status: " + this.status
        );
    }
}

var bob = new Employee("Bob", "V School Instructor", "$3000/hour");

var melissa = new Employee("Melissa", "V School Instructor", "$2000/hour");

var bruce = new Employee("Bruce", "HP Systems Engineer", "$5000/hour");

melissa.status = "Part Time";
bruce.status = "Contractor";

bob.printEmployeeForm();
melissa.printEmployeeForm();
bruce.printEmployeeForm();

employees.push(bob, melissa, bruce);
console.log(employees);
