import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  data=<any>''
  constructor(private auth: AuthService,private router:Router) { }

  ngOnInit() {
    this.auth.getProfile().subscribe(res=>{
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
