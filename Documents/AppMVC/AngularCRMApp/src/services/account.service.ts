import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient:HttpClient) { }
  
  signup(signup:any):Observable<any>{
    return this.httpClient.post(environment.apiKey+environment.apiController.accountsignup,signup);
  }
}
