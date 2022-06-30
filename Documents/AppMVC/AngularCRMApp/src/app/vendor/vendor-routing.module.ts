import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddVenorComponent } from "./add-vendor/add-venor.component";
import { ListVendorComponent } from "./list-vendor/list-vendor.component";

   const routes:Routes=[
    { path:'add',component:AddVenorComponent},
    { path:'list',component:ListVendorComponent}
   ]

@NgModule({
    imports:[RouterModule.forChild(routes)]
}) 

export class VendorRoutingModule{
}