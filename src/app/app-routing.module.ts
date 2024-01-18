import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from './m-doctor/doctor/doctor.component';

const routes: Routes = [
  {
    path:'doctors',component:DoctorComponent,
    loadChildren:()=>import('./m-doctor/m-doctor.module').then(a=>a.MDoctorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
