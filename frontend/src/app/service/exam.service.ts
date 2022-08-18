import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private http:HttpClient) { }
  getQuestjson(){
    return this.http.get<any>("assets/q.json")
  }
}
