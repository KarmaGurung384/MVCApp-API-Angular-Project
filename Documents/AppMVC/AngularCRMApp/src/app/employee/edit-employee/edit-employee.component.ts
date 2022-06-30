import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/Interface/employee';
import { EmployeeService } from 'src/services/employee.service';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss'],
})
export class EditEmployeeComponent implements OnInit {
  id:number=0;
  employee: Employee = {
    FirstName:'',
    LastName: '',
    City:'',
    Title:'',
    hireDate: new Date(),
    birthDate: new Date(),
    region: 0,
    reportsTo: 0,
    TitleOfCourtesy:'',
    regionName:'',
    Country:'',
    Address:'',
    PhoneNumber:0,
    fullName:'',
    id:0
  };

  constructor(private activateRoute:ActivatedRoute, private empService:EmployeeService) {
    activateRoute.params.subscribe(d=>{
      this.id=d["id"]
    })
  }

  ngOnInit(): void {}
  setData(ngForm: NgForm) {
    this.empService.getEmpById(this.id).subscribe(d=>{
      this.employee=d;
      
    })
    ngForm.setValue(this.employee)
  }
  editEmployee(ngForm: NgForm) 
  {
   this.employee=ngForm.value;
   this.empService.updateEmployee(this.employee).subscribe(d=>{

   });
  }
}
