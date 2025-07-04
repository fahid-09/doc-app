import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDoctorsComponent } from './all-doctors/all-doctors.component';
import { HomeComponent } from './home/home.component';
import { UserAuthComponent } from './user-auth/user-auth.component';

const routes: Routes = [
  {path:'' , component: HomeComponent},
  {path:'all-doctors' , component: AllDoctorsComponent},
  {path:'user-auth', component:UserAuthComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
