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
        
/*from Bob*/        
//var employees = [];
//
//function Employee(name, jobTitle, salary) {
//    this.name = name;
//    this.jobTitle = jobTitle;
//    this.salary = salary;
//    this.status = "Full Time";
//    this.printEmployeeForm = function () {
//        console.log(
//            "Name: " + this.name +
//            ", Job Title: " + this.jobTitle +
//            ", Salary: " + this.salary +
//            ", Status: " + this.status
//        );
//    }
//}
//
//// Instatiate 3 employees
//var emp1 = new Employee("Bob Slob", "CEO", "$20/hour");
//var emp2 = new Employee("Jill Pill", "CMO", "$30/hour");
//var emp3 = new Employee("Bill Lill", "CTO", "$40/hour");
//
//// Change status to one to Part Time
//emp3.status = "Part Time";
//
//// Call printEmployeeForm on each employee
//emp1.printEmployeeForm();
//emp2.printEmployeeForm();
//emp3.printEmployeeForm();
//
//// Add everyone to employees array
//employees.push(emp1, emp2, emp3);
//console.log(employees);