import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  courseArray:any=[]

  constructor(private courseService:CourseService,private router:Router) { }

  ngOnInit() {
    this.courseService.displayCourse().subscribe((res)=>{
      console.log(res);
      this.courseArray=res.item
    })
  }

  apply(){
    this.router.navigate(['/signup'])
  }
}
