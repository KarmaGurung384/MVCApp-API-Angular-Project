import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Region } from 'src/app/Interface/region';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegionServiceService {

  url:string= environment.apiKey+environment.apiController.region;
  constructor(private httpClient:HttpClient) { }

  getRegion():Observable<Region[]>
  {
    return this.httpClient.get<Region[]>(this.url);
  }
  insertRegion(region:Region):Observable<any>
  {
    return this.httpClient.post(this.url, region);
  }
  deleteRegion(id:any):Observable<any>
  {
    return this.httpClient.delete(this.url+id)
  } 
}
