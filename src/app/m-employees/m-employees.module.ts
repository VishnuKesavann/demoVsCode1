import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MEmployeesRoutingModule } from './m-employees-routing.module';
import { EmployeesComponent } from './employees.component';


@NgModule({
  declarations: [EmployeesComponent],
  imports: [
    CommonModule,
    MEmployeesRoutingModule
  ]
})
export class MEmployeesModule { }
