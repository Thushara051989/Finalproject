import { Directive,ElementRef,HostListener,Input,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appExams]'
})
export class ExamsDirective {
  @Input() isCorrect: Boolean=false;
  constructor(private ef: ElementRef,private render:Renderer2) { }
  @HostListener('click')ans(){
    if(this.isCorrect){
      this.render.setStyle(this.ef.nativeElement,'background','green');
      this.render.setStyle(this.ef.nativeElement,'color','#fff');
      this.render.setStyle(this.ef.nativeElement,'background','2px solid green');
    }else{
      this.render.setStyle(this.ef.nativeElement,'background','red');
      this.render.setStyle(this.ef.nativeElement,'color','#fff');
      this.render.setStyle(this.ef.nativeElement,'background','2px solid grey');
    }
  }
}
