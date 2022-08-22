import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-aprofile',
  templateUrl: './aprofile.component.html',
  styleUrls: ['./aprofile.component.css']
})
export class AprofileComponent implements OnInit {

  data=<any>''

  constructor(private auth: AuthService,private router:Router) { }

  ngOnInit(){
    this.auth.getadmProfile().subscribe(res=>{
      console.log({res});
      if(res.success){
        this.data=res.data
      }    
    })
  }
}
