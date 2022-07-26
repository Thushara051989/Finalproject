import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  getAdmin(){
    return this.http.get<any>('http://localhost:3000/admin')
  }

  getTrainer(){
    return this.http.get<any>('http://localhost:3000/trainer')
  }

  postStudent(data:any){
    return this.http.post<any>('http://localhost:3000/student',{data})
  }

  getStudent(){
    return this.http.get<any>('http://localhost:3000/student')
  }

}
