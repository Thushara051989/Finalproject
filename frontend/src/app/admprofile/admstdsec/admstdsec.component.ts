import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import { Router } from '@angular/router';
declare var M: any;

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
onDelete(id:any) {
  if (confirm('Are you sure to delete this record ?') == true) {
    this.studentservice.onDelete(id).subscribe((res) => {
    
      M.toast({ html: 'Deleted successfully', classes: 'rounded' });
    });
  }
}
}
