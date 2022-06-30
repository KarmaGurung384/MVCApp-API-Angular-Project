import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';



const routes: Routes = [
{ path:'region', loadChildren: () => import('./region/region.module').then(m=>m.RegionModule)},
{ path:'employee', loadChildren: () => import('./employee/employee.module').then(m=>m.EmployeeModule)},
{ path:'shipper', loadChildren: () => import('./shipper/shipper.module').then(m=>m.ShipperModule)},
{ path:'products', loadChildren: () => import('./products/products.module').then(m=>m.ProductsModule)},
{ path:'account', loadChildren: () => import('./account/account.module').then(m=>m.AccountModule)}

    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
