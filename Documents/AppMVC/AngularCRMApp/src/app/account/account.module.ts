import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingupComponent } from './singup/singup.component';
import { AccountRoutingModule } from './account-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountService } from 'src/services/account.service';



@NgModule({
  declarations: [
    SingupComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers:[AccountService]
})
export class AccountModule { }
