import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-scourses',
  templateUrl: './scourses.component.html',
  styleUrls: ['./scourses.component.css']
})
export class ScoursesComponent implements OnInit {

  constructor(private courseService:CourseService) { }
  meanArray:any=[]
  ngOnInit(){
    this.courseService.getMean().subscribe(res=>{
      console.log(res);
      this.meanArray=res.item
      
    })
  }

}
