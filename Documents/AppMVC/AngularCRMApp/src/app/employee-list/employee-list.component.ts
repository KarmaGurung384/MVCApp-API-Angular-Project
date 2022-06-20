import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employee=[
    { id:1, name: "Kim", Salary:"5000", Dept:"IT" },
    {id:2, name: "Lin", Salary:"6000", Dept:"IT" },
    { id:3, name: "Paula", Salary:"4000", Dept:"HR" },
    { id:4, name: "Ram", Salary:"3000", Dept:"HR" }
    

    ]
  constructor() { }

  ngOnInit(): void {
  }

}
