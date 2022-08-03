import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-admcrssec',
  templateUrl: './admcrssec.component.html',
  styleUrls: ['./admcrssec.component.css']
})
export class AdmcrssecComponent implements OnInit {
  courseArray:any=[]
  constructor(private courseService:CourseService) { }

  ngOnInit() {
    this.courseService.displayCourse().subscribe((res)=>{
      console.log(res);
      this.courseArray=res.item
      
    })
  }

}
