import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-admstdsec',
  templateUrl: './admstdsec.component.html',
  styleUrls: ['./admstdsec.component.css']
})
export class AdmstdsecComponent implements OnInit {

  studentArray:any=[]
  constructor(private studentservice:StudentService) { }

  ngOnInit() {
    this.studentservice.displayStudents().subscribe((res)=>{
      console.log(res);
      this.studentArray=res.item
      
    })

}
}
