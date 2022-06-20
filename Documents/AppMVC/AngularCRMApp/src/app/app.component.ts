import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  applicationName="My CRM in Angular"
  studentName="Smith"
  isDevEnvironment= true;
  showDiv=true;
  countries =["UK","USA","Germany", "Spain", "Nepal"]

  togglediv(){
    this.showDiv = !this.showDiv;
  }
}
