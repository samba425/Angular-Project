import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
employeeName = 'Bindu';
employeeId = 1;
employeeAttendance = 'Absent';
addNewEmployee = false;
employeeAddedStatus = 'No employee was added';
employeeAdded = false;
employees = 
['Jhon', 
'Sam', 
'Doe', 
'James',
'Mosh',
'Max',
'Padma', 
'Sanjeev', 
'Pranai', 
'Divya', 
'Sweety', 
'Pinky']


getemployeeAttendance(){
  return this.employeeAttendance;
}
  constructor() {
    this.employeeAttendance = Math.random() > 0.5 ? 'Present' : 'Absent';
    setTimeout(() => {
    return this.addNewEmployee = true;
    }, 2000);
   }

  ngOnInit() {
  }
  onAddEmployee(){
    this.employees.push(this.employeeName);
    return this.employeeAdded = true;
    // return this.employeeAddedStatus = 'New Employee added. Name is ' + this.employeeName;
  }
  onUpdateEmployee(event: Event){
  return this.employeeName = (<HTMLInputElement>event.target).value;
  }

  getColor(){
    return this.employeeAttendance === 'Present' ? 'green' : 'red';
  }

}
