import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClientGridComponent} from "./client-grid.component";
import {AgGridModule} from "ag-grid-angular";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [ClientGridComponent],
  imports: [
    CommonModule,
    AgGridModule,
    HttpClientModule
  ],exports:[ClientGridComponent]
})
export class ClientGridModule { }
