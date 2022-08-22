import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-admprofile',
  templateUrl: './admprofile.component.html',
  styleUrls: ['./admprofile.component.css']
})
export class AdmprofileComponent implements OnInit {

  constructor(private auth: AuthService,private router: Router, private toast: ToastrService) { }

  data = <any>''

  ngOnInit() {
    this.auth.getadmProfile().subscribe(res => {
      console.log({ res });
      if (res.success) {
        this.data = res.data
      }
    })
  }

  logout() {
    localStorage.clear()
    this.router.navigate(['/'])
}
}
