import {FormControl, ValidatorFn} from "@angular/forms";

export interface KeyValueInterface {
  key: string;
  value: any;
}

export interface EmployeeInterface{
  id:number,
  name:string,
  mobile:string,
  gender:string,
  education:string,
  unitId:number
}
export interface UnitInterface{
  id:number,
  name:string,
  status:boolean,
  dateEstablishment:string,
}


export interface ConfigInterface{
  fields:FieldInterface[],
  hasButton?:boolean,
  titleButton:string
}

export interface FieldInterface{
  name:string,
  label:string,
  validation:ValidatorFn[],
  type:"radio" | "select" | "input",
  defaultValue:any,
  options?:KeyValueInterface[],
  formType:"fc" | 'fg',
  children?: FieldInterface[];

}
