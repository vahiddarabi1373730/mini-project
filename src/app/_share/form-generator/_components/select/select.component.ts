import {Component, Input} from '@angular/core';
import {FieldInterface} from "../../../../_models/models.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
  private _config!: FieldInterface;
  private _formGroup!: FormGroup;
  protected formControl!: FormControl;
  @Input() set config(config: FieldInterface) {
    this._config = config;
  }

  get config(): FieldInterface {
    return this._config;
  }
  @Input() set formGroup(formGroup: FormGroup) {
    this._formGroup = formGroup;
    Object.keys(formGroup.controls)
      .filter((fc) => fc === this.config.name)
      .map((i) => {
        this.formControl = formGroup.controls[i] as FormControl;
        this.formControl.setValue(this.config.defaultValue.key)
      });
  }

    protected readonly Validators = Validators;
}
