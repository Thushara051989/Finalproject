import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  course={
    name:'',
    duration:'',
    image:'',
    description:''
   }
   id:any
   constructor(private courseService:CourseService,private router:Router,private route:ActivatedRoute) { }
 
   ngOnInit() {
 
     this.id=this.route.snapshot.paramMap.get('id')
     console.log('id is:',this.id);
     if(this.id){
     this.courseService.displayCourseById(this.id).subscribe((res)=>{
       console.log({res});
 
       this.course=res.item
       
     })
   }
     
   }
 
   onAddCourse(){
 
     if(this.id){
 
       this.courseService.updateCourse(this.id,this.course).subscribe((res)=>{
         console.log({res});
         if(res.success===1){
           this.router.navigate(['/admcrssec'])
         }
       })
 
     }else{
 this.courseService.createCourse(this.course).subscribe((res)=>{
   console.log({res});
 
     this.router.navigate(['/admcrssec'])
   
 })
   }
 }
 
 }
 