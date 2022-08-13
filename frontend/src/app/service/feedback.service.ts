import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }
  sendFeed(data:any){
    return this.http.post<any>('http://localhost:3000/feedback/add',{data} )
    .subscribe((res)=>{
      console.log({res});
    })
}
displayfeeds(){
    return this.http.get<any>('http://localhost:3000/feedback');
}
}
