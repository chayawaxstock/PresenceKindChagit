import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Kindergarten } from '../models/kindergarten';
import { Teacher } from '../models/teacher';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TeacherService {
 

constructor(private http:HttpClient) { }

addKindergarden(kindergarden:Kindergarten): Observable<boolean> {
  throw new Error("Method not implemented.");
}
addNewTeacher(teacher:Teacher): Observable<boolean> {
  throw new Error("Method not implemented.");
}

}
