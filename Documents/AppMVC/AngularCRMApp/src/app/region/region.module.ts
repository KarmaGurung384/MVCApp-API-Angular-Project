import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRegionComponent } from './add-region/add-region.component';
import { ListRegionComponent } from './list-region/list-region.component';
import { RegionRoutingModule } from './region-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditRegionComponent } from './edit-region/edit-region.component';
import { DeleteRegionComponent } from './delete-region/delete-region.component';
import { UppdateRegionComponent } from './update-region/uppdate-region.component';
import { RegionServiceService } from 'src/services/region-service.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AddRegionComponent,
    ListRegionComponent,
    EditRegionComponent,
    DeleteRegionComponent,
    UppdateRegionComponent
  ],
  imports: [
    CommonModule,
    RegionRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers:[RegionServiceService]
})
export class RegionModule { }
