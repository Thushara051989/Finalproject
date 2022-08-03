import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private auth:AuthService,private router:Router,private toast:ToastrService) { }

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

stdLogin(){
  const data=this.signInform.value
  this.auth.loginStudent(data).subscribe(res=>{
    console.log({res});
    
    if(res.success){
      localStorage.setItem('token',res.token)
      this.toast.success(res.message,'Success')
    this.router.navigate(['/profile'])
    }
    else{
      this.toast.error(res.message,'failed')
    }

  },
  err=>{
    alert('login failed')
  })

}

trainerLogin(){
   const dataaa=this.signInform.value
  this.auth.loginTrainer(dataaa).subscribe(res=>{
    console.log({res});
    
    if(res.success){
      localStorage.setItem('token',res.token)
      this.toast.success(res.message,'Success')
    this.router.navigate(['/trnprofile'])
    }
    else{
      this.toast.error(res.message,'failed')
    }

  },
  err=>{
    alert('login failed')
  })


}

adminlogin(){
  const dataa=this.signInform.value
  this.auth.loginAdmin(dataa).subscribe(res=>{
    console.log({res});
    
    if(res.success){
      localStorage.setItem('token',res.token)
      this.toast.success(res.message,'Success')
    this.router.navigate(['/admprofile'])
    }
    else{
      this.toast.error(res.message,'failed')
    }

  },
  err=>{
    alert('login failed')
  })


}

}
