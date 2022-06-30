import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from 'src/app/Interface/product';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //url:string= environment.apiKey+environment.apiController.product;
  constructor(private httpClient:HttpClient) { }
    getAllProduct():Observable<product[]>
    {
      return this.httpClient.get<product[]>("'https://localhost:7127/api/")
  }
}
