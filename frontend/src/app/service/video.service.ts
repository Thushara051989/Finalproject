import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpRequest } from '@angular/common/http';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private posturl="/api/video";

  constructor(private http:HttpClient) { }

  addvideo(video:Video){
    let headers=new HttpHeaders({'Content-Type':'application/json'});
    // let options=new HttpRequest({headers:headers});
    return this.http.post(this.posturl,JSON.stringify(video))
    .pipe(map((response:any) => response.json()));
  }
}
