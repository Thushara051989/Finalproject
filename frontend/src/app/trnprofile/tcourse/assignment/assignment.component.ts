import { Component, OnInit } from '@angular/core';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
import { FileService } from '../../../service/file.service';


const uri= 'http://localhost:3000/file/upload';
@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  uploader:FileUploader = new FileUploader({url:uri});

  attachmentList:any = [];

  constructor(private fileService:FileService) { 
    this.uploader.onCompleteItem = (item:any, response:any , status:any, headers:any) => {
      this.attachmentList.push(response);
  }
  }

  ngOnInit(): void {
  }

//   download(index){
//     var filename = this.attachmentList[index].uploadname;

//     this.fileService.downloadFile(filename)
//     .subscribe(
//         data => saveAs(data, filename),
//         error => console.error(error)
//     );
// }
}

