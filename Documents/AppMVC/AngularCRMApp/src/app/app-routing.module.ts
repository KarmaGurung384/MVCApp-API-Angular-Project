import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AppComponent } from './app.component';
import { ArithematicComponent } from './arithematic/arithematic.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [

    {path:'',component:AppComponent},
    {path:'product/add',component:AddproductComponent},
    {path:'product/list',component:ProductListComponent},
    {path: 'product/edit/:id',component:EditproductComponent},
 
  
  {path: 'employee', component:EmployeeListComponent},
  {path:'math', component:ArithematicComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
