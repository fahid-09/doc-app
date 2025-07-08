import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDoctorsComponent } from './all-doctors/all-doctors.component';
import { HomeComponent } from './home/home.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { AddDoctorComponent } from './admin/add-doctor/add-doctor.component';
import { ViewDoctorProfileComponent } from './admin/view-doctor-profile/view-doctor-profile.component';
import { UpdateDoctorComponent } from './admin/update-doctor/update-doctor.component';

const routes: Routes = [
  {path:'' , component: HomeComponent},
  {path:'all-doctors' , component: AllDoctorsComponent},
  {path:'user-auth', component:UserAuthComponent},
  {path:'add-doctor', component: AddDoctorComponent},
  {path:'view-doctor/:docId', component: ViewDoctorProfileComponent},
  {path: 'update-doctor/:docId', component: UpdateDoctorComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
