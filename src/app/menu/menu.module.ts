import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from "@angular/material/tabs";
import {MenuComponent} from "./menu.component";



@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MatTabsModule
  ],
  exports:[MenuComponent]
})
export class MenuModule { }
