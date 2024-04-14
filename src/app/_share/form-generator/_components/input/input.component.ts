import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FieldInterface} from "../../../../_models/models.interface";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements OnInit{
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
      });
  }

  protected onIconClick() {
    this.formControl.setValue(null);
  }

  ngOnInit() {
  }

  protected readonly Validators = Validators;
}
