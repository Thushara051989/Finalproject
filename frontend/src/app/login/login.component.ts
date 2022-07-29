import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private auth:AuthService,private router:Router) { }

  signSubmit=true


  signInform=this.fb.group({
    email:['',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9,%+]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    password:['',[Validators.required,Validators.minLength(6)]],
  })

get signInControls(){
  return this.signInform.controls
}

  ngOnInit() {
  }

onsignIn(){

}

}
