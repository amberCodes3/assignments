
//First, you will create an empty array named employees
var employees = [ ]

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

var employees = new PrintEmployeeForm("Marge Simpson", "Substitute Teacher", 30000, "Part-Time");
console.log(employees);

var employees = new PrintEmployeeForm("Homer Simpson", "Nuclear Safety Inspector", 24395); 
console.log(employees);

var employees = new PrintEmployeeForm("Ned Flanders", "Pharmaceutical Clerk", 33000, "Contract"); 
console.log(employees);


//Put the generated employees into the employees array using whichever method you prefer.
var employees = [ ]

for(var i = 0; i < PrintEmployeeForm.length; i++){
    employees.push(PrintEmployeeForm[i])
}
console.log(employees)