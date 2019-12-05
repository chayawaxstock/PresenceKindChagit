import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Kindergarten } from '../models/kindergarten';
import { Teacher } from '../models/teacher';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Child } from '../models/child';

const API=environment.api_url+"teacher/"
@Injectable({
  providedIn: 'root'
})
export class TeacherService {

currectTeacher: Teacher=new Teacher();
currectKindergarden:Kindergarten=new Kindergarten();

constructor(private http:HttpClient) { }

addKindergarden(kindergarden:Kindergarten): Observable<boolean> {
  throw new Error("Method not implemented.");
}
addNewTeacher(teacher:Teacher): Observable<Teacher> {
  return this.http.post<Teacher>(API+"addTeacher",teacher);
}

getChildren(teacherId:number):Observable<Child[]>
{
  return this.http.get<Child[]>(API+"getChildrenByTeacher/"+teacherId);
}


}
