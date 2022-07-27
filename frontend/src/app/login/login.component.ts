import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private auth:AuthService,private router:Router) { }
  hide=false
  submitted=false
  user={useremail:'',
  password:''}
  ngOnInit(): void {
  }



   loginUser(){
    this.auth.getStudent().subscribe((res)=>{

      console.log(res);
      
      // const user=res.find((a:any)=>{
      //   return a.email === this.user.useremail. && a.password === this.user.password
      // })
      // // if(user){
      // //   alert('login SUccessfull')
      // // }
    })
  }
}
