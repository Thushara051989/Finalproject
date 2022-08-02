import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admprofile',
  templateUrl: './admprofile.component.html',
  styleUrls: ['./admprofile.component.css']
})
export class AdmprofileComponent implements OnInit {
  data=<any>''
  constructor(private auth: AuthService,private router:Router) { }

  ngOnInit() {
    this.auth.getadmProfile().subscribe(res=>{
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
