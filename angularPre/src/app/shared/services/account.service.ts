import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const API=environment.api_url+"account/"
@Injectable({
  providedIn: 'root'
})
export class AccountService {

constructor(public http:HttpClient) { }

login(password,email):Observable<any>{
  return this.http.post<any>(API+"logIn",{email,password});
}
}


