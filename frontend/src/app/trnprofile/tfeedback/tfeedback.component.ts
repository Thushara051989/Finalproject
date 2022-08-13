import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from 'src/app/service/feedback.service';

@Component({
  selector: 'app-tfeedback',
  templateUrl: './tfeedback.component.html',
  styleUrls: ['./tfeedback.component.css']
})
export class TfeedbackComponent implements OnInit {
  Data:any=[]
  constructor(private router:Router, private feedservice:FeedbackService) { }

  ngOnInit(): void {
    this.feedservice.displayfeeds().subscribe((res)=>{
      console.log(res);
      this.Data=res.item;
      
    })
  }

}
