import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  // onDelete() {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private http:HttpClient) { }
  displayTrainers(){
    return this.http.get<any>('http://localhost:3000/trainer')
  }
  
}
