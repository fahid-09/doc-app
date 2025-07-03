import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDoctorsComponent } from './all-doctors/all-doctors.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'all-doctors' , component: AllDoctorsComponent},
  {path:'' , component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
