import { Component, OnInit } from '@angular/core';
import {FileSelectDirective  ,FileUploader} from 'ng2-file-upload';
import { FileService } from 'src/app/service/file.service';
import {saveAs} from 'file-saver';

const uri = 'http://localhost:3000/file/upload';
@Component({
  selector: 'app-sassignments',
  templateUrl: './sassignments.component.html',
  styleUrls: ['./sassignments.component.css'],
  providers:[FileService]
})
export class SassignmentsComponent implements OnInit {

  uploader:FileUploader = new FileUploader({url:uri});

  attachmentList:any = [];
  constructor(private _fileService:FileService) { }

  ngOnInit(): void {
    this.uploader.onCompleteItem = (item:any, response:any , status:any, headers:any) => {
      this.attachmentList.push(JSON.parse(response));
  }
}

download(index: string | number){
  var filename = this.attachmentList[index].uploadname;

  this._fileService.downloadFile(filename)
  .subscribe(
      data => saveAs(data, filename),
      error => console.error(error)
  );
}
  }


