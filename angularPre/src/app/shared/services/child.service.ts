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

constructor(private http:HttpClient) { }

getImage(imageUrl: string): Observable<Blob> {
  return this.http.get(imageUrl, { responseType: 'blob' });
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

}
