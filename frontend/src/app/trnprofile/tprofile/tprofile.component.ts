import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tprofile',
  templateUrl: './tprofile.component.html',
  styleUrls: ['./tprofile.component.css']
})
export class TprofileComponent implements OnInit {
  data=<any>''
  constructor(private auth: AuthService,private router:Router) { }

  ngOnInit(){
    this.auth.gettrnProfile().subscribe(res=>{
      console.log({res});
      if(res.success){
        this.data=res.data
      }
      
    })
  }

}
