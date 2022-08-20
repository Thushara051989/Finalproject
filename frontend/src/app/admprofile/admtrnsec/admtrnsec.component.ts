import { Component, OnInit } from '@angular/core';
import { TrainerService } from 'src/app/service/trainer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admtrnsec',
  templateUrl: './admtrnsec.component.html',
  styleUrls: ['./admtrnsec.component.css']
})
export class AdmtrnsecComponent implements OnInit {
  trainerArray: any = []
  totalRecords:any
  page:number=1
  constructor(private trainerservice: TrainerService, private router: Router) { }

  ngOnInit() {
    this.trainerservice.displayTrainers().subscribe((res) => {
      console.log(res);
      this.trainerArray = res.item
      this.totalRecords=this.trainerArray.item.length

    })
  }



  removeTrainer(id:any){
    if(confirm('are you sure want to delete?')){
    this.trainerservice.deleteTrainer(id).subscribe((res:any)=>{
      if(res.success===1){

        this.ngOnInit()

      }

    })
  }


      
  }


  logout() {
    localStorage.clear()
    this.router.navigate(['/'])
  }

}
