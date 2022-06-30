import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Region } from 'src/app/Interface/region';
import { RegionServiceService } from 'src/services/region-service.service';

@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.scss']
})
export class AddRegionComponent implements OnInit {

  addRegionForm:FormGroup;
  region:Region={
    id:0,
    name:''
  }
  isSuccessful:boolean=false;


  /*loadRegion={
    'regionName':'Asian',
  
  }*/
 

  constructor(private builder:FormBuilder, private regionService:RegionServiceService) { 
    this.addRegionForm= builder.group({
      'regionName': new FormControl('',[Validators.required,Validators.minLength(4)]),
      
    });
    //this.addRegionForm.setValue(this.loadRegion)
    //this.addRegionForm.patchValue(this.loadRegion)
  }

  ngOnInit(): void {
    
  }
  saveRegion(){
    this.region.id=0;
    this.region.name=this.addRegionForm.value["regionName"];
    this.regionService.insertRegion(this.region).subscribe((d:any)=>{
    this.isSuccessful=true;
    });

  }
}
