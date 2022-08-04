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

  navigateToEdit(id:any){
    this.router.navigate([`/edit/${id}`])
    }

    navigateToDelete(id:any){
      if(confirm('are you sure want to delete?')){
        this.courseService.deleteCourse(id).subscribe((res:any)=>{
          if(res.success===1){
      
            this.ngOnInit()
      
          }
        })
    
      }
    
      
    
    }

  logout(){
    localStorage.clear()
    this.router.navigate(['/'])
  }
}
