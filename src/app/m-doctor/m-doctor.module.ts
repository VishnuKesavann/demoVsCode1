import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDoctorRoutingModule } from './m-doctor-routing.module';
import { DoctorComponent } from './doctor/doctor.component';
import { AddDocComponent } from './Doctor/add-doc/add-doc.component';


@NgModule({
  declarations: [DoctorComponent, AddDocComponent],
  imports: [
    CommonModule,
    MDoctorRoutingModule
  ]
})
export class MDoctorModule { }
