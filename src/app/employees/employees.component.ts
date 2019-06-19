import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {

title = 'Employee List';

employees= [
{Name:"Percy" , Position: "Manager" , Age: "34" , employeeNo: "13005138" , Gender: "Male"},
{Name:"Sanele" , Position: "HR" , Age: "30" , employeeNo: "13005120" , Gender: "Female"},
{Name:"Sibusiso" , Position: "Administrator" , Age: "24" , employeeNo: "13005200" ,  Gender: "Male"},
{Name:"Nkwe" , Position: "Programmer" , Age: "31" , employeeNo: "13005222" ,  Gender: "Male"},
{Name:"Ofentse" , Position: "Finance" , Age: "29" , employeeNo: "13001414" ,  Gender: "Female"},
];

model:any={};
model2:any={};
msg:any={};
addEmployee(){
  this.employees.push(this.model);
  this.model = {};
  
}
deleteEmployee(i){
  this.employees.splice(i, 1)
  console.log(1);

  }
  myValue: string | number;
  editEmployee(k: string | number){
    this.model2.Name = this.employees[k].Name;
    this.model2.Position = this.employees[k].Position;
    this.model2.Age = this.employees[k].Age;
    this.model2.employeeNo = this.employees[k].employeeNo;
    this.model2.Gender = this.employees[k].Gender;
    this.myValue = k;

  }
  updateEmployee(){
    let k= this.myValue;
    for(let i=0; i<this.employees.length;i++){
     if(i==k){
       this.employees[i]= this.model2;
       this.model2 = {};
     }
    }
  }
}




