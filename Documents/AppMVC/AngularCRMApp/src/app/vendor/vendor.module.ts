import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListVendorComponent } from './list-vendor/list-vendor.component';
import { AddVenorComponent } from './add-vendor/add-venor.component';
import { VendorRoutingModule } from './vendor-routing.module';



@NgModule({
  declarations: [
    ListVendorComponent,
    AddVenorComponent
  ],
  imports: [
    CommonModule,
    VendorRoutingModule
  ]
})
export class VendorModule { }
