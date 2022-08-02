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

  // createbook(data:any){
  //   return this.http.post<any>('books',{data})
  // }

  // displayBooksById(id:any){

  //   return this.http.get<any>(`books/${id}`)

  // }

  // updateBook(id:any,data:any){
  //   return this.http.put<any>(`books/${id}`,data)
  // }

  // deleteBook(id:any){
  //   return this.http.delete(`books/${id}`)
  // }
}