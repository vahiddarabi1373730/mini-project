import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {EmployeesComponent} from "./employees.component";
import {ClientGridModule} from "../_share/client-grid/client-grid.module";
import {HttpClientModule} from "@angular/common/http";
import {FormGeneratorModule} from "../_share/form-generator/form-generator.module";

const route:Routes=[
  {path:"",component:EmployeesComponent},
  {path:":id",loadChildren:()=>import('./detail-employee/detail-employee.module').then(m=>m.DetailEmployeeModule)}

]

@NgModule({
  declarations: [EmployeesComponent],
  imports: [
    CommonModule,
    ClientGridModule,
    HttpClientModule,
    RouterModule.forChild(route),
    FormGeneratorModule
  ]
})
export class EmployeesModule { }
