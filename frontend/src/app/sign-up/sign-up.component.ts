import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }
  signHide=false
  signSubmit=true
  course=[
    {id:1,name:'Mean Stack'},
    {id:2,name:'Block Chain'},
    {id:3,name:'Mern Stack'},
  ]
  get signControls(){
    return this.signUpForm.controls
  }



  signUpForm=this.fb.group({

    firstName:['',Validators.required],
    lastName:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    course:[,Validators.required],
    passWord:['',[Validators.required,Validators.minLength(6)]],
    ConfirmPass:['',[Validators.required,Validators.minLength(6)]]
},
{
  validators:()=>{
    if(this.signUpForm?.controls?.passWord.value!=this.signUpForm?.controls?.ConfirmPass.value){
      console.log('hello');
      this.signUpForm.controls.ConfirmPass.setErrors({passMisMatch:true})
    }
    // console.log('hello');
    
  }
}
)
onSign(data:any){
  this.signSubmit=true
  console.log(data);
  

}




}
