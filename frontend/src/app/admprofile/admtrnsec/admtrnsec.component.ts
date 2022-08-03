import { Component, OnInit } from '@angular/core';
import { TrainerService } from 'src/app/service/trainer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admtrnsec',
  templateUrl: './admtrnsec.component.html',
  styleUrls: ['./admtrnsec.component.css']
})
export class AdmtrnsecComponent implements OnInit {
  trainerArray:any=[]
  constructor(private trainerservice:TrainerService,private router:Router) { }

  ngOnInit() {
    this.trainerservice.displayTrainers().subscribe((res)=>{
      console.log(res);
      this.trainerArray=res.item
      
    })

}
logout(){
  localStorage.clear()
  this.router.navigate(['/'])
}
}
