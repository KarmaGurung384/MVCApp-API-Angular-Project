import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})
export class EditproductComponent implements OnInit {
  id: number=0;
  productName="Chair"
  constructor( private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.params.subscribe(p=>{
     this.id=p["id"];
    });
  }

  ngOnInit(): void {
  }

}
