import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(private http:HttpClient) { }
  displayTrainers(){
    return this.http.get<any>('http://localhost:3000/trainer')
  }
}
