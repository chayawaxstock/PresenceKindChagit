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

postFile(fileToUpload: File) {
  const endpoint = 'http://localhost:28101/api/UploadImage';
  const formData: FormData = new FormData();
  formData.append('Image', fileToUpload, fileToUpload.name);
  return this.http.post(endpoint, formData);
}

getImage(imageUrl: string): Observable<Blob> {
  return this.http.get(imageUrl, { responseType: 'blob' });
}

addChild(child:Child,fileToUpload:File)
{
  const formData: FormData = new FormData();
  formData.append('Image', fileToUpload, fileToUpload.name);
  return this.http.post(API+"AddChild",formData);
}

}
