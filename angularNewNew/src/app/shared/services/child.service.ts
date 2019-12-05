import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Child } from '../models/child';

const API=environment.api_url+"child/"

@Injectable({
  providedIn: 'root'
})
export class ChildService {
  deletePresence(childId: number): Observable<any> {
    return this.http.delete(API+"deletePrecence/"+childId);
  }
  currectParents: any;

constructor(private http:HttpClient) { }



getImage(imageUrl: string): Observable<Blob> {
  // const formData: FormData = new FormData();
  // formData.append('Image', imageUrl);
  return this.http.post(API+"getImage",imageUrl, { responseType: 'blob' });
}

addChild(child:Child)
{
  return this.http.post(API+"AddChild",child);
}

uploadImage(fileToUpload:File,childId:number)
{
  const formData: FormData = new FormData();
  formData.append('Image', fileToUpload, fileToUpload.name);
  return this.http.post(API+"UploadImage/"+childId,formData);
}
addPrecence(kinderId:number,childId:number):Observable<boolean>
{
  return this.http.get<boolean>(API+"addPrecence/"+kinderId+"/"+childId);
}

checkPresence(childId:number):Observable<number>
{
  return this.http.get<number>(API+"checkPrecence/"+childId);
}

}
