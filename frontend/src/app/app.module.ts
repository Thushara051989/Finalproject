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
import { ProfileComponent } from './profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SdashboardComponent } from './profile/sdashboard/sdashboard.component';
import { SprofileComponent } from './profile/sprofile/sprofile.component';
import { AdmprofileComponent } from './admprofile/admprofile.component';
import { TrnprofileComponent } from './trnprofile/trnprofile.component';
import { CourseService } from './service/course.service';
import { AdmtrnsecComponent } from './admprofile/admtrnsec/admtrnsec.component';
import { AdmstdsecComponent } from './admprofile/admstdsec/admstdsec.component';
import { AdmcrssecComponent } from './admprofile/admcrssec/admcrssec.component';
import { TstudentComponent } from './trnprofile/tstudent/tstudent.component';
import { SassignmentsComponent } from './profile/sassignments/sassignments.component';
import { SexamsComponent } from './profile/sexams/sexams.component';
import { SfeedbacksComponent } from './profile/sfeedbacks/sfeedbacks.component';
import { AddCourseComponent } from './admprofile/admcrssec/add-course/add-course.component';
import { AddstudentComponent } from './admprofile/admstdsec/addstudent/addstudent.component';
import { AddtrainerComponent } from './admprofile/admtrnsec/addtrainer/addtrainer.component';
import { ScoursesComponent } from './profile/scourses/scourses.component';
import { TprofileComponent } from './trnprofile/tprofile/tprofile.component';
import { AprofileComponent } from './admprofile/aprofile/aprofile.component';
import { TcontentComponent } from './trnprofile/tcontent/tcontent.component';
import { TfeedbackComponent } from './trnprofile/tfeedback/tfeedback.component';
import { AssignmentComponent } from './trnprofile/assignment/assignment.component';
import { FileUploadModule } from 'ng2-file-upload';
import { FileService } from './service/file.service';
import { ExamComponent } from './profile/sexams/exam/exam.component';
import { ExamsDirective } from './profile/sexams/exam/exams.directive';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    FooterComponent,
    ProfileComponent,
    SdashboardComponent,
    SprofileComponent,
    AdmprofileComponent,
    TrnprofileComponent,
    AdmtrnsecComponent,
    AdmstdsecComponent,
    AdmcrssecComponent,
    TstudentComponent,
    SassignmentsComponent,
    SexamsComponent,
    SfeedbacksComponent,
    AddCourseComponent,
    AddstudentComponent,
    AddtrainerComponent,
    ScoursesComponent,
    TprofileComponent,
    AprofileComponent,
    TcontentComponent,
    TfeedbackComponent,
    AssignmentComponent,
    ExamComponent,
    ExamsDirective
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
    NgbModule,
    FileUploadModule,
    NgxPaginationModule
  ],
  providers: [AuthService,CourseService,FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
