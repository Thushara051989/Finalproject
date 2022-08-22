import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-trnprofile',
  templateUrl: './trnprofile.component.html',
  styleUrls: ['./trnprofile.component.css']
})
export class TrnprofileComponent implements OnInit {

  data=<any>''
  
  constructor(private auth: AuthService,private router:Router) { }

  ngOnInit() {
    this.auth.gettrnProfile().subscribe(res=>{
      console.log({res});
      if(res.success){
        this.data=res.data
      }
    })
}

logout(){
  localStorage.clear()
  this.router.navigate(['/'])
}
}
