import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validationErrors',
  standalone: true
})
export class ValidationErrorsPipe implements PipeTransform {

  transform(validation: any): string {
    if (validation.required) {
      return "این فیلد اجباری است."
    }
    if (validation.maxlength) {
      return ` حداکثر کاراکار مجاز ${validation.maxlength?.requiredLength}میباشد. `
    }
    if (validation.minlength) {
      return `حداقل کاراکار مجاز  ${validation.minlength?.requiredLength}میباشد. `
    }
    if (validation.email) {
      return "ایمیل وارد شده صحیح نیست."
    }
    else{
      return  ""
    }
  }

}
