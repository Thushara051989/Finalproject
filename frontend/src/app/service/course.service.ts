import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

 
  constructor(private http:HttpClient) { }

  displayCourse(){

    return this.http.get<any>('http://localhost:3000/course')
  }

  createCourse(data:any){
    return this.http.post<any>('http://localhost:3000/course/add',{data})
  }

  displayCourseById(id:any){

    return this.http.get<any>(`http://localhost:3000/course/${id}`)

  }

  updateCourse(id:any,data:any){
    return this.http.put<any>(`http://localhost:3000/course/${id}`,data)
  }

  deleteCourse(id:any){
    return this.http.delete(`http://localhost:3000/course/${id}`)
  }
}