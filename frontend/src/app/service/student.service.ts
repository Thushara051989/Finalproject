import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  displayStudents(){
    return this.http.get<any>('http://localhost:3000/student')
  }
  onDelete(id:any) {
    return this.http.delete<any>('http://localhost:3000/student'+`/${id}`);
  }
}
