var employees = new Array;

function Employee (empName, empTitle, empSalary) {
    this.name = empName;
    this.title = empTitle;
    this.salary = empSalary;
    this.hours = "Full Time";
    this.printEmployeeForm = function() {
        console.log("Name: " + employees.name + );
    }
}

var bob = new Employee("Bob", "V School Instructor", "$3000/hour");

var melissa = new Employee("Melissa", "V School Instructor", "$2000/hour", "Contractor");

var bruce = new Employee("Bruce", "HP", "Systems Engineer", "Part Time");


bob.printEmployeeForm;
melissa.printEmployeeForm;
bruce.printEmployeeForm;