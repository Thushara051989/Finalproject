import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmprofileComponent } from './admprofile/admprofile.component';
import { AuthGuard } from './auth.guard';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SdashboardComponent } from './profile/sdashboard/sdashboard.component';
import { SgradeComponent } from './profile/sgrade/sgrade.component';
import { SmessagesComponent } from './profile/smessages/smessages.component';
import { SprofileComponent } from './profile/sprofile/sprofile.component';
import { SsettingsComponent } from './profile/ssettings/ssettings.component';
import { TrnprofileComponent } from './trnprofile/trnprofile.component';
import { AdmtrnsecComponent } from './admprofile/admtrnsec/admtrnsec.component';


const routes: Routes = [
{path:'',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'signup',component:SignUpComponent},
{path:'courses',component:CoursesComponent},
{path:'profile',canActivate:[AuthGuard],component:ProfileComponent, 
children:[
  {path:'sdashboard',component:SdashboardComponent},
  {path:'sgrade',component:SgradeComponent},
  {path:'smessages', component:SmessagesComponent},
  {path:'sprofile',component:SprofileComponent},
  {path:'ssettings',component:SsettingsComponent}
]},
{path:'admprofile',canActivate:[AuthGuard],component:AdmprofileComponent},
{path:'trnprofile',canActivate:[AuthGuard],component:TrnprofileComponent},
{path:'admtrnsec',component:AdmtrnsecComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
