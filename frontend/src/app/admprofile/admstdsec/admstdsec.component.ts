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
  totalRecords:any
  page:number=1
  
  constructor(private studentservice:StudentService,private router:Router) { }

  ngOnInit() {
    this.studentservice.displayStudents().subscribe((res)=>{
      console.log(res);
      this.studentArray=res.item
      this.totalRecords=this.studentArray.item.length
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

logout(){
  localStorage.clear()
  this.router.navigate(['/'])
}
}
