import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  product=[
    {id:1, name:"Chair", UnitPrice:"20"},
    {id:2, name:"Bench", UnitPrice:"100"},
    {id:3, name:"Table", UnitPrice:"200"},
    {id:4, name:"Laptop", UnitPrice:"1000"},
    {id:5, name:"Mobile", UnitPrice:"450"}


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
