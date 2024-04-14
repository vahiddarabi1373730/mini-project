import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UnitListComponent} from "./unit-list.component";
import {ClientGridModule} from "../_share/client-grid/client-grid.module";
import {HttpClientModule} from "@angular/common/http";
import {FormGeneratorModule} from "../_share/form-generator/form-generator.module";
import {StatusRendererModule} from "./status-renderer/status-renderer.module";

const route:Routes=[
  {path:"",component:UnitListComponent}
]

@NgModule({
  declarations: [UnitListComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forChild(route),
        ClientGridModule,
        FormGeneratorModule,
      StatusRendererModule
    ]
})
export class UnitListModule { }
