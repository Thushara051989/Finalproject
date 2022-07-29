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
isProcessing=false
message:string='hello world'
className='d-none'

  get signControls(){
    return this.signUpForm.controls
  }

  getClassName(){
    return this.className
  }



  signUpForm=this.fb.group({

    firstname:['',Validators.required],
    lastname:['',Validators.required],
    email:['',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9,%+]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    course:[,Validators.required],
    password:['',[Validators.required,Validators.minLength(6)]],
    ConfirmPass:['',[Validators.required,Validators.minLength(6)]]
},
{
  validators:()=>{
    if(this.signUpForm?.controls?.password.value!=this.signUpForm?.controls?.ConfirmPass.value){
      console.log('hello');
      this.signUpForm.controls.ConfirmPass.setErrors({passMisMatch:true})
    }
    // console.log('hello');
    
  }
}
)


onSign(){

  this.isProcessing=true
  const formData=this.signUpForm.value

  
   this.auth.postStudent(formData).subscribe((res)=>{ 
    console.log(res);
    if(res.success){
    
    this.isProcessing=false
    this.toast.success('Registration  SuccessFull','Success')
    this.router.navigate(['/login'])
  }
  else{
    this.isProcessing=false
    this.message=res.message
    this.className='alert alert-danger'

  }
   },
   err=>{
    this.isProcessing=false
    this.message='server error'
    this.className='alert alert-danger'
   }
   
    )
  

}




}