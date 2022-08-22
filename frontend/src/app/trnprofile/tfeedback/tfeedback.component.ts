import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from 'src/app/service/feedback.service';

@Component({
  selector: 'app-tfeedback',
  templateUrl: './tfeedback.component.html',
  styleUrls: ['./tfeedback.component.css']
})
export class TfeedbackComponent implements OnInit {

  data:any=[]
  totalRecords:any
  page:number=1
  
  constructor(private router:Router, private feedservice:FeedbackService) { }

  ngOnInit(): void {
    this.feedservice.displayfeeds().subscribe((res)=>{
      console.log(res);
      this.data=res.item;
      this.totalRecords=this.data.item.length
    })
  }

}
