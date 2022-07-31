import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }



  postStudent(data: any) {
    return this.http.post<any>('http://localhost:3000/student/signUp', { data })
  }

  loginStudent(data: any) {
    return this.http.post<any>('http://localhost:3000/student/login', { data })
  }

  getProfile() {
    let headers = {
      'authorization': 'Bearer ' + localStorage.getItem('token')
    }
    return this.http.get<any>('http://localhost:3000/student/profile', { headers: headers })
  }
  loggedIn() {
    return !!localStorage.getItem('token')
  }

}
