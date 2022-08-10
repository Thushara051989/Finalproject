import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-tstudent',
  templateUrl: './tstudent.component.html',
  styleUrls: ['./tstudent.component.css']
})
export class TstudentComponent implements OnInit {
  studentArray:any=[]
  constructor(private studentservice:StudentService,private router:Router) { }
  ngOnInit() {
    this.studentservice.displayStudents().subscribe((res)=>{
      console.log(res);
      this.studentArray=res.item
      
    })

}
removeStd(id:any){
  if(confirm('are you sure want to delete?')){
    this.studentservice.deleteStudent(id).subscribe((res:any)=>{
      if(res.success===1){
  
        this.ngOnInit()
  
      }
    })

  }
}

}
