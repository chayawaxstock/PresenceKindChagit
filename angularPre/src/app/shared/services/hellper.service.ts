import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Kindergarten } from '../models/kindergarten';
import { environment } from 'src/environments/environment';

const API=environment.api_url+"hellper/"
@Injectable({
  providedIn: 'root'
})
export class HellperService {

constructor(private http:HttpClient) { }

getAllKindergarden():Observable<Kindergarten[]>
{
  return this.http.get<Kindergarten[]>(API+"GetAllKindergartens");
}

}
