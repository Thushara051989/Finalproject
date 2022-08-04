import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admstdsec',
  templateUrl: './admstdsec.component.html',
  styleUrls: ['./admstdsec.component.css']
})
export class AdmstdsecComponent implements OnInit {

  studentArray:any=[]
  constructor(private studentservice:StudentService,private router:Router) { }

  ngOnInit() {
    this.studentservice.displayStudents().subscribe((res)=>{
      console.log(res);
      this.studentArray=res.item
      
    })

}
logout(){
  localStorage.clear()
  this.router.navigate(['/'])
}
}
