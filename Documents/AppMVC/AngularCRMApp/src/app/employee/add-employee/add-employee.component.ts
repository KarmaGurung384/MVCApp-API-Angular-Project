import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/Interface/employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
 employee:Employee={
  FirstName:'',
  LastName:'',
  City:'',
    Title:'',
    hireDate:new Date(),
    birthDate:new Date(),
    region:0,
    reportsTo:0,
    TitleOfCourtesy:'',
    Country:'',
    Address:'',
    PhoneNumber:0,
    regionName:'',
    fullName:'',
    id:0

  

 }

  constructor() { }

  ngOnInit(): void {
  }
  insertEmployee(form:NgForm){
    console.log(form.value)

  }

}
