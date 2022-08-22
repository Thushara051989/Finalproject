import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sprofile',
  templateUrl: './sprofile.component.html',
  styleUrls: ['./sprofile.component.css']
})
export class SprofileComponent implements OnInit {

  data=<any>''

  constructor(private auth: AuthService,private router:Router) { }

  ngOnInit(){
    this.auth.getProfile().subscribe(res=>{
      console.log({res});
      if(res.success){
        this.data=res.data
      }
    })
  }
}
