import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  constructor(private http:HttpClient){}

  downloadFile(file:String){
      var body = {filename:file};

      return this.http.post('http://localhost:3000/file/download',body,{
          responseType : 'blob',
          headers:new HttpHeaders().append('Content-Type','application/json')
      });
  }
}
