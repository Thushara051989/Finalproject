import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private fb:FormBuilder,private auth:AuthService,private router:Router,private toast:ToastrService) { }

  ngOnInit() {
  }
  signHide=true
  signSubmit=true
  submitted=false
  course=[
    {name:'Mean Stack'},
    {name:'Block Chain'},
    {name:'Mern Stack'},
  ]
  get signControls(){
    return this.signUpForm.controls
  }



  signUpForm=this.fb.group({

    Sfirstname:['',Validators.required],
    Slastname:['',Validators.required],
    Semail:['',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9,%+]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    Scourse:[,Validators.required],
    Spassword:['',[Validators.required,Validators.minLength(6)]],
    ConfirmPass:['',[Validators.required,Validators.minLength(6)]]
},
{
  validators:()=>{
    if(this.signUpForm?.controls?.Spassword.value!=this.signUpForm?.controls?.ConfirmPass.value){
      console.log('hello');
      this.signUpForm.controls.ConfirmPass.setErrors({passMisMatch:true})
    }
    // console.log('hello');
    
  }
}
)


onSign(){

  
   this.auth.postStudent(this.signUpForm.value).subscribe((res)=>{ 
    console.log(res);
    this.toast.success('Registration  SuccessFull','Success')
    
   this.router.navigate([''])
   })
  

}




}
