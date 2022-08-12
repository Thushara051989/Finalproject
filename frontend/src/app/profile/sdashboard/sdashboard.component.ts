import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-sdashboard',
  templateUrl: './sdashboard.component.html',
  styleUrls: ['./sdashboard.component.css']
})
export class SdashboardComponent implements OnInit {

  data=<any>''
  constructor(private auth:AuthService) { }

  ngOnInit(){
    this.auth.getProfile().subscribe(res=>{
      console.log({res});
      if(res.success){
        this.data=res.data
      }
      
    })
  }

}
