import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormGeneratorComponent} from "./form-generator.component";
import {SelectModule} from "./_components/select/select.module";
import {InputModule} from "./_components/input/input.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {RadioModule} from "./_components/radio/radio.module";


@NgModule({
  declarations: [FormGeneratorComponent],
  imports: [
    CommonModule,
    SelectModule,
    InputModule,
    ReactiveFormsModule,
    MatButtonModule,
    RadioModule
  ],
  exports:[FormGeneratorComponent]
})
export class FormGeneratorModule { }
