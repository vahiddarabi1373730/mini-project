import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ConfigInterface, FieldInterface} from "../../_models/models.interface";
import {FormControl, FormGroup, ValidatorFn} from "@angular/forms";

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrl: './form-generator.component.scss'
})
export class FormGeneratorComponent {

  public formGroup!: FormGroup;
  private _config!: ConfigInterface;
  @Input() set config(config: ConfigInterface) {
    this._config = config;
  }

  get config() {
    return this._config;
  }

  @Output() formReadyEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() submitFormEmitter: EventEmitter<any> = new EventEmitter<any>();

  private createFormControl(
    defaultValue: any,
    validation: ValidatorFn[] | ValidatorFn,
  ) {
    return new FormControl(defaultValue, validation);
  }

  public createFormGroup(fields: FieldInterface[]): FormGroup {
    const fg: { [key: string]: any } = {};
    fields?.forEach((field) => {
      if (field.formType === 'fc') {
        fg[field?.name] = this.createFormControl(
          field.defaultValue ? field.defaultValue : null,
          field.validation,
        );
      } else if (field.formType === 'fg' && field.children) {
        fg[field?.name] = this.createFormGroup(field.children);
      }
    });
    return new FormGroup(fg);
  }

  protected onSubmit() {
    this.submitFormEmitter.emit(this.formGroup.value);
    this.formGroup.reset()
  }

  ngOnInit(): void {
    this.formGroup = this.createFormGroup(this.config.fields);
    this.formReadyEmitter.emit(this.formGroup);
  }
}
