
//First, you will create an empty array named employees
var employees = []

//Next, you will create an Employee constructor with the first three attributes defined at the time of instantiation and the fourth will be defaulted to "Full Time". This constructor will also have a method called printEmployeeForm that prints the employee's information to the console.

function PrintEmployeeForm (Name, JobTitle, Salary, Status = "Full-Time"){
    this.Name = Name
    this.JobTitle = JobTitle
    this.Salary = Salary
    this.Status = Status
}

/*You will then:
Instantiate three employees
Override the status attribute of one of them to either "Part Time" or "Contract"
Call the printEmployeeForm method for each employee*/
//Put the generated employees into the employees array using whichever method you prefer.

var employees1 = new PrintEmployeeForm("Marge Simpson", "Substitute Teacher", 30000, "Part-Time");
var marge = employees.push(employees1);
 console.log(employees1);

var employees2 = new PrintEmployeeForm("Homer Simpson", "Nuclear Safety Inspector", 24395); 
var homer = employees.push(employees2);
console.log(employees2);

var employees3 = new PrintEmployeeForm("Ned Flanders", "Pharmaceutical Clerk", 33000, "Contract"); 
var ned = employees.push(employees3);
console.log(employees3);