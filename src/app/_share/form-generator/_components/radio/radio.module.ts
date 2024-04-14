import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioComponent } from './radio.component';
import {MatRadioModule} from "@angular/material/radio";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    RadioComponent
  ],
  exports: [
    RadioComponent
  ],
  imports: [
    CommonModule,
    MatRadioModule,
    ReactiveFormsModule,

  ]
})
export class RadioModule { }
