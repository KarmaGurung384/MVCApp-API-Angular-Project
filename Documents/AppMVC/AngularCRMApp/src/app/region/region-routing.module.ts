import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { AddRegionComponent } from "./add-region/add-region.component";
import { DeleteRegionComponent } from "./delete-region/delete-region.component";
import { EditRegionComponent } from "./edit-region/edit-region.component";
import { ListRegionComponent } from "./list-region/list-region.component";
import { UppdateRegionComponent } from "./update-region/uppdate-region.component";

const routes:Routes=[
    {path:'list',component:ListRegionComponent},
    {path: 'add', component:AddRegionComponent},
    {path: 'edit', component:EditRegionComponent},
    {path: 'delete', component:DeleteRegionComponent},
    {path: 'update', component:UppdateRegionComponent}
]
@NgModule (
    {
    imports:[RouterModule.forChild(routes)]
    }
)

export class RegionRoutingModule{


}