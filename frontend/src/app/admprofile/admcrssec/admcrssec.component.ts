import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admcrssec',
  templateUrl: './admcrssec.component.html',
  styleUrls: ['./admcrssec.component.css']
})
export class AdmcrssecComponent implements OnInit {
  courseArray:any=[]
  constructor(private courseService:CourseService,private router:Router) { }

  ngOnInit() {
    this.courseService.displayCourse().subscribe((res)=>{
      console.log(res);
      this.courseArray=res.item
      
    })
  }
  logout(){
    localStorage.clear()
    this.router.navigate(['/'])
  }
}
