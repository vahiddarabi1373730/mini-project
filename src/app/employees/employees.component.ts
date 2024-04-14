import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {GridOptions, SelectionChangedEvent} from "ag-grid-community";
import {ConfigInterface, EmployeeInterface} from "../_models/models.interface";
import {Validators} from "@angular/forms";
import {ClientGridComponent} from "../_share/client-grid/client-grid.component";
import {GenderCellRendererComponent} from "./gender-cell-renderer/gender-cell-renderer.component";
import {FormGeneratorComponent} from "../_share/form-generator/form-generator.component";
import {AppServices} from "../_services/app-services.service";
import {Router} from "@angular/router";
import {DetailCellRendererComponent} from "./detail-cell-renderer/detail-cell-renderer.component";
import {translateEducation} from "../_share/_functions/translate-education";

@Component({
  selector: 'app-employee',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent implements OnInit , AfterViewInit{

  constructor(private appServices:AppServices,private router:Router) {
  }
  @ViewChild(ClientGridComponent) gridRef!:ClientGridComponent
  @ViewChild(FormGeneratorComponent) formRef!:FormGeneratorComponent
  protected rowData:EmployeeInterface[]=[];
  private editMode:boolean=false
  private   selectedData!:EmployeeInterface
  protected config:ConfigInterface={
    hasButton:true,
    titleButton:"ایجاد",
    fields:[
      {
        name:"id",
        type:"input",
        label:"آی دی",
        defaultValue:"",
        validation:[Validators.required],
        formType:"fc"
      },
      {
        name:"name",
        type:"input",
        label:"نام",
        defaultValue:"",
        validation:[Validators.required],
        formType:"fc"
      },
      {
        name:"mobile",
        type:"input",
        label:"موبایل",
        defaultValue:"",
        validation:[Validators.required],
        formType:"fc"
      },
      {
        name:"education",
        type:"select",
        label:"تحصیلات",
        options:[
          {key:"diploma",value:"دیپلم"},
          {key:"masters",value:"کارشناسی"},
          {key:"senior",value:"ارشد"},
          {key:"doctorate",value:"دکترا"},
        ],
        defaultValue:{key:"diploma",value:"دیپلم"},
        validation:[Validators.required],
        formType:"fc"
      },
      {
        name:"unitId",
        type:"input",
        label:"واحد سازمانی",
        defaultValue:"",
        validation:[Validators.required],
        formType:"fc"
      },
      {
        name:"gender",
        type:"radio",
        label:"آی دی",
        defaultValue:"",
        options:[
          {
            key:"fame",
            value:"مونث"
          },
          {
            key:"men",
            value:"مذکر"
          }
        ],
        validation:[Validators.required],
        formType:"fc"
      },
    ]
  }
  gridOptions:GridOptions={
    columnDefs:[
      {headerName:"آی دی",field:"id",checkboxSelection:true},
      {headerName:"نام",field:"name"},
      {headerName:"جنسیت",field:"gender",cellRenderer:GenderCellRendererComponent},
      {
        headerName:"تحصیلات",
        field:"education",
        cellRenderer:(params:any)=>{
            return `${translateEducation(params.value)}`
        }
      },
      {headerName:"واحد سازمانی",field:"unitId"},
      {headerName:"موبایل",field:"mobile"},
      {headerName:"جزییات",cellRenderer:DetailCellRendererComponent}
    ]
  }


  protected onSubmit(formGroupValue:EmployeeInterface){
    const oldData:EmployeeInterface[]=this.gridRef.rowData
    if(this.editMode && this.selectedData){
      const index=oldData.findIndex(d=>d.id==this.selectedData.id)
      oldData.splice(index,1)
      this.rowData=this.insert(oldData, index, {...formGroupValue,id:this.selectedData.id})
    }else{
      this.rowData=[...oldData,{...formGroupValue,id:Math.random()}]
    }
  }

  private insert = (arr:EmployeeInterface[], index:number, newItem:EmployeeInterface) => [
    ...arr.slice(0, index),
    newItem,
    ...arr.slice(index)
  ]

  protected onSelected(event:SelectionChangedEvent){
    this.editMode=true
    this.selectedData=event.api.getSelectedRows()[0]
    this.formRef.formGroup.patchValue({
      id:this.selectedData?.id,
      name:this.selectedData?.name,
      gender:this.selectedData?.gender,
      mobile:this.selectedData?.mobile,
      education:this.selectedData?.education,
      unitId:this.selectedData?.unitId
    })
  }

  ngOnInit() {
    this.appServices.getData<EmployeeInterface>("employees").subscribe(res=>{
      this.rowData=res
    })
  }
  ngAfterViewInit() {
    setTimeout(()=>{
      this.formRef.formGroup.controls['id'].disable()
    },0)
  }
}
