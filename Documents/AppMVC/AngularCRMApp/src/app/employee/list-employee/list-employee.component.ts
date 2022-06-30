import { LiteralMap } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Interface/employee';
import { EmployeeService } from 'src/services/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {
 /*employee=[
  {id:0, firstname:"Tim", lastname:"Lama", contact:4253948629},
  {id:1, firstname:"Tashi", lastname:"Kim", contact:4053948628},
  {id:2, firstname:"Len", lastname:"Lim", contact:4223948608},
  {id:3, firstname:"Tina", lastname:"Son", contact:4223948628}

 ]*/
   empCollection:Employee[]=[]
  constructor(private empService:EmployeeService, private router:Router) { }

  ngOnInit(): void {
    this.getAllEmps();
  }
  
  getAllEmps(){
   this.empService.getAllEmployee().subscribe(d=>{
    this.empCollection=d;
   })
  }
  editEmployee(id:any){
    this.router.navigate(['employee/edit/'+id])

  }
}
