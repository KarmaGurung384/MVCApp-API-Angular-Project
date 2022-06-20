import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
   
  product={
    id:0,
    name:'',
    price:0


  }
  constructor() { }

  ngOnInit(): void {
  }
  addProduct() {
    console.log(this.product.id +""+ this.product.name+""+ this.product.price)
  }

}
