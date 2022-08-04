import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'
import {MatTabsModule} from '@angular/material/tabs'
import {MatCardModule} from '@angular/material/card'
import {MatFormFieldModule,} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from './service/auth.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ToastrModule } from 'ngx-toastr';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CoursesComponent } from './courses/courses.component';
import { ProfileComponent } from './profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SdashboardComponent } from './profile/sdashboard/sdashboard.component';
import { SprofileComponent } from './profile/sprofile/sprofile.component';
import { SmessagesComponent } from './profile/smessages/smessages.component';
import { SsettingsComponent } from './profile/ssettings/ssettings.component';
import { SgradeComponent } from './profile/sgrade/sgrade.component';
import { AdmprofileComponent } from './admprofile/admprofile.component';
import { TrnprofileComponent } from './trnprofile/trnprofile.component';
import { CourseService } from './service/course.service';
import { AdmtrnsecComponent } from './admprofile/admtrnsec/admtrnsec.component';
import { AdmstdsecComponent } from './admprofile/admstdsec/admstdsec.component';
import { AdmcrssecComponent } from './admprofile/admcrssec/admcrssec.component';
import { TcourseComponent } from './trnprofile/tcourse/tcourse.component';
import { TstudentComponent } from './trnprofile/tstudent/tstudent.component';
import { AddCourseComponent } from './admprofile/admcrssec/add-course/add-course.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    FooterComponent,
    HeaderComponent,
    CoursesComponent,
    ProfileComponent,
    SdashboardComponent,
    SprofileComponent,
    SmessagesComponent,
    SsettingsComponent,
    SgradeComponent,
    AdmprofileComponent,
    TrnprofileComponent,
    AdmtrnsecComponent,
    AdmstdsecComponent,
    AdmcrssecComponent,
    TcourseComponent,
    TstudentComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgbModule
  ],
  providers: [AuthService,CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
