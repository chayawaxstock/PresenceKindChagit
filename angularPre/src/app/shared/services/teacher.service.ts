import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Kindergarten } from '../models/kindergarten';
import { Teacher } from '../models/teacher';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API=environment.api_url+"teacher/"
@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  currectTeacher: Teacher=new Teacher();

constructor(private http:HttpClient) { }

addKindergarden(kindergarden:Kindergarten): Observable<boolean> {
  throw new Error("Method not implemented.");
}
addNewTeacher(teacher:Teacher): Observable<boolean> {
  throw new Error("Method not implemented.");
}
login(password,email):Observable<Teacher>{
   return this.http.post<Teacher>(API+"logIn",{email,password})
}

}
