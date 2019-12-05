import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Kindergarten } from '../models/kindergarten';
import { environment } from 'src/environments/environment';
import { City } from '../models/city';
import { Language } from '../models/language';
import { Layer } from '../models/layer';
import { Belonging } from '../models/belonging';
import { Kind } from '../models/kind';

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

getAllCities():Observable<City[]>
{
  return this.http.get<City[]>(API+"GetAllCities");
}

getAllLanguge():Observable<Language[]>
{
  return this.http.get<Language[]>(API+"GetAllLanguge");
}

getAllLayers(): Observable<Layer[]> {
  return this.http.get<Layer[]>(API+"GetAllLayers");
}

getAllBelongs(): Observable<Belonging[]> {
  return this.http.get<Belonging[]>(API+"GetAllBelonging");
}

getAllKinds(): Observable<Kind[]> {
  return this.http.get<Kind[]>(API+"GetAllKinds");
}

}
