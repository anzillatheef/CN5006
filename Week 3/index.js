//Declaring the function EmployeeInfo
function EmployeeInfo(name,Salary){
    console.log("Welcome " + name+ ", Your monthly Salary is "+ Salary)
}
console.log ("This is my first progame")

//Calling the function EmployeeInfo
var EmpName="John"
var EmpSalary= 50000

EmployeeInfo(EmpName,EmpSalary)

//Code for the second Excercise

const EmpSkills =(Skills)=>{
 console.log("Expert In: "+Skills)
}
EmpSkills("Java")


//Excercise 3
const student= require('./StudentInfo')
const person = require('./Person')
// because getName is the function so we use ()
console.log("Student Name:" +student.getName())
console.log(student.Location())
console.log(student.dob)
// because dob is a variable so we do nt use ()
console.log(student.Studentgrade())
console.log("grade is "+student.Studentgrade(55) )
// creating new Person
person1= new person("Jim","USA","myemail@gmail.com")
console.log("using Person Module",person1.getPersonInfo())
console.log("Programe ended")



