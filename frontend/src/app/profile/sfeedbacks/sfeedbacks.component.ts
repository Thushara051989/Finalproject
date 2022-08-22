import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/service/feedback.service';
import { FormBuilder,Validators,FormControl,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sfeedbacks',
  templateUrl: './sfeedbacks.component.html',
  styleUrls: ['./sfeedbacks.component.css']
})
export class SfeedbacksComponent implements OnInit {

  constructor(private router:Router,public feedservice:FeedbackService) { }
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    feed: new FormControl('', [Validators.required])
  })
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
    this.feedservice.sendFeed(this.form.value);
    this.router.navigate(['profile/sprofile'])
  }

  ngOnInit(): void {
  }

}
