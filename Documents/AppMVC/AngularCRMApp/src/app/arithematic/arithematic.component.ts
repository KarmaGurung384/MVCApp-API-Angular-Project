import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arithematic',
  templateUrl: './arithematic.component.html',
  styleUrls: ['./arithematic.component.scss']
})
export class ArithematicComponent implements OnInit {
  
  FirstNumber=20
  SecondNumber=60
  Result=0;

  constructor() { }

  ngOnInit(): void {
  }
  addition(){
    this.Result= parseFloat(this.FirstNumber+"")+ parseFloat(this.SecondNumber+"")
  }

}
