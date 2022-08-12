import { Component, OnInit } from '@angular/core';
// import { VideoService } from 'src/app/service/video.service';
@Component({
  selector: 'app-tcontent',
  templateUrl: './tcontent.component.html',
  styleUrls: ['./tcontent.component.css'],
  // providers:[VideoService]
})
export class TcontentComponent implements OnInit {
//  videos:Array<Video>
//  selectedVideo:Video;
//  public hidenewVideo:boolean=true;
//   constructor(private videoservice:VideoService) { }

  ngOnInit(): void {
  }

//   onSelectedVideo(video:any){
//     this.selectedVideo=video;
//     this.hidenewVideo=true;
//   }


//   onsubmitaddvideo(video:Video){
//     this.videoservice.addvideo(video)
//     .subscribe(resNewVideo =>{
//       this.videos.push(resNewVideo);
//       this.selectedVideo=resNewVideo;
//     })
//   }
//   newVideo(){
//     this.hidenewVideo=false;
//   }
}
