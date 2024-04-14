import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationErrorsComponent } from './validation-errors.component';
import {ValidationErrorsPipe} from "../../../_pipes/validation-errors.pipe";



@NgModule({
  declarations: [
    ValidationErrorsComponent
  ],
  exports: [
    ValidationErrorsComponent,
  ],
  imports: [
    CommonModule,
    ValidationErrorsPipe

  ]
})
export class ValidationErrorsModule { }
