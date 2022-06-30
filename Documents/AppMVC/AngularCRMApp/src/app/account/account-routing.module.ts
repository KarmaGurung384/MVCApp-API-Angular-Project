import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SingupComponent } from "./singup/singup.component";

const routes:Routes=[
    {path:'signup',component:SingupComponent}
    
  
]
@NgModule (
    {
    imports:[RouterModule.forChild(routes)]
    }
)
export class AccountRoutingModule{

}

