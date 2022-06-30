import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/services/account.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {
 
  signUpForm:FormGroup;
  constructor(private fb:FormBuilder, private accountService:AccountService) {
    this.signUpForm = this.fb.group({
      "FirstName": new FormControl('',[ Validators.required]),
      "LasttName": new FormControl('', [Validators.required]),
      "EmailId": new FormControl('', [Validators.required, Validators.email]),
      "Password": new FormControl('', [Validators.required]),
      "ConfirmPassword": new FormControl('', [Validators.required]),
    });

  }

  ngOnInit(): void {
  }
  singup(){
    this.accountService.signup(this.signUpForm.value).subscribe(d=>{
      alert(d)
      this.signUpForm.reset();
    })
  }


}
