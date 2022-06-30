import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Region } from 'src/app/Interface/region';
import { RegionServiceService } from 'src/services/region-service.service';
import { DeleteRegionComponent } from '../delete-region/delete-region.component';

@Component({
  selector: 'app-list-region',
  templateUrl: './list-region.component.html',
  styleUrls: ['./list-region.component.scss']
})
export class ListRegionComponent implements OnInit {
 /*region=[
  {id:0,name:"Northern"},
  {id:1,name:"Southern"},
  {id:2,name:"Western"},
  {id:3,name:"Eastern"}
]*/
  regionCollection:Region[]=[]
  constructor(private regionService:RegionServiceService, private router:Router) { }

  ngOnInit(): void {
  this.getData();
     
  }

  getData(){
    this.regionService.getRegion().subscribe((data)=>{
      this.regionCollection=data;
    });
  }  

  
  deleteRegion(id:any){ 
   this.regionService.deleteRegion(id).subscribe((d:any)=>{
  this.getData();

    
   });

   };
  

}
