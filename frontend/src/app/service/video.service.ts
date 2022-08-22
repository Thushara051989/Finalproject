import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpRequest } from '@angular/common/http';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private posturl="/api/video";

  constructor(private http:HttpClient) { }

  addvideo(video:VideoService){
    let headers=new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.posturl,JSON.stringify(video))
    .pipe(map((response:any) => response.json()));
  }
}
