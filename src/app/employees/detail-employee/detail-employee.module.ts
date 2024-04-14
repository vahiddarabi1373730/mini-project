import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailEmployeeComponent } from './detail-employee.component';
import {RouterModule, Routes} from "@angular/router";
import {MatTabsModule} from "@angular/material/tabs";
import {MatTableModule} from "@angular/material/table";

const routes:Routes=[
  {path:"",component:DetailEmployeeComponent}
]

@NgModule({
  declarations: [
    DetailEmployeeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatTableModule
  ]
})
export class DetailEmployeeModule {
  constructor() {
    console.log('here')
  }
}
