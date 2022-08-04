import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  sendMail(url:any,data:any){
    return this.http.post(url,data)
  }

  postStudent(data: any) {
    return this.http.post<any>('http://localhost:3000/student/signUp', { data })
  }
  postTrainer(data: any) {
    return this.http.post<any>('http://localhost:3000/trainer/signUp', { data })
  }




  loginStudent(data: any) {
    return this.http.post<any>('http://localhost:3000/student/login', { data })
  }
  loginAdmin(data: any) {
    return this.http.post<any>('http://localhost:3000/admin/login', { data })
  }
  loginTrainer(data: any) {
    return this.http.post<any>('http://localhost:3000/trainer/login', { data })
  }


  getProfile() {
    let headers = {
      'authorization': 'Bearer ' + localStorage.getItem('token')
    }
    return this.http.get<any>('http://localhost:3000/student/profile', { headers: headers })
  }
  
  getadmProfile() {
    let headers = {
      'authorization': 'Bearer ' + localStorage.getItem('token')
    }
    return this.http.get<any>('http://localhost:3000/admin/profile', { headers: headers })
  }

  gettrnProfile() {
    let headers = {
      'authorization': 'Bearer ' + localStorage.getItem('token')
    }
    return this.http.get<any>('http://localhost:3000/trainer/profile', { headers: headers })
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

}
