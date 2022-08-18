import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { ExamService } from 'src/app/service/exam.service';


@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  public qlist: any=[];
  public currentq: number=0;
  public points:number=0;
  counter=60;
  correctans:number=0;
  wrongans:number=0;
  interval$:any;
  progress:string="0";
  quizCompleted:boolean=false;
  constructor(private examService:ExamService) { }

  ngOnInit(): void {
    this.getallq();
    this.startc();
  }
  getallq(){
    this.examService.getQuestjson().subscribe(res=>{
      this.qlist =res.questions;
    })
  }
  nextq(){
    this.currentq++;
  }
  previousq(){
    this.currentq--;
  }
  ans(currentqn:number,option:any){
    if(currentqn === this.qlist.length){
      this.quizCompleted=true;
      this.stopc();
    }
    if(option.correct){
      this.points+=1;
      this.correctans++;
      setTimeout(()=>{
      this.currentq++;
      this.resetc();
      this.getProgress();
      },1000);
    }
    else{
      // this.points-=1;
      setTimeout(()=>{
      this.currentq++;
      this.wrongans++;
      this.resetc();
      this.getProgress();
      },1000);  
    }
  }
  startc(){
    this.interval$= interval(1000)
    .subscribe(val=>{
      this.counter--;
      if(this.counter==0){
        this.currentq++;
        this.counter=60;
      }
    });
    setTimeout(()=>{
      this.interval$.unsubscribe()
    },600000);
  }
  stopc(){
    this.interval$.unsubscribe();
    this.counter=0;
  }
  resetc(){
    this.stopc();
    this.counter=60;
    this.startc();
  }
  resetQuiz(){
    this.resetc();
    this.getallq();
    this.points=0;
    this.counter=60;
    this.currentq=0;
    this.progress="0";
  }
  getProgress(){
    this.progress= ((this.currentq/this.qlist.length)*100).toString();
    return this.progress;
  }
}
