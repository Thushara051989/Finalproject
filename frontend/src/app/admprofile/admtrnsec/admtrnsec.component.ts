import { Component, OnInit } from '@angular/core';
import { TrainerService } from 'src/app/service/trainer.service';

@Component({
  selector: 'app-admtrnsec',
  templateUrl: './admtrnsec.component.html',
  styleUrls: ['./admtrnsec.component.css']
})
export class AdmtrnsecComponent implements OnInit {
  trainerArray:any=[]
  constructor(private trainerservice:TrainerService) { }

  ngOnInit() {
    this.trainerservice.displayTrainers().subscribe((res)=>{
      console.log(res);
      this.trainerArray=res.item
      
    })

}
}
