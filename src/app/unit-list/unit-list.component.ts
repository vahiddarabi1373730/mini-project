import {Component, OnInit, ViewChild} from '@angular/core';
import {GridOptions, SelectionChangedEvent} from "ag-grid-community";
import {ConfigInterface, EmployeeInterface, UnitInterface} from "../_models/models.interface";
import {Validators} from "@angular/forms";
import {ClientGridComponent} from "../_share/client-grid/client-grid.component";
import {FormGeneratorComponent} from "../_share/form-generator/form-generator.component";
import {AppServices} from "../_services/app-services.service";
import {StatusRendererComponent} from "./status-renderer/status-renderer.component";

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrl: './unit-list.component.scss'
})
export class UnitListComponent implements OnInit{
  constructor(private appServices:AppServices) {
  }
  @ViewChild(ClientGridComponent) gridRef!:ClientGridComponent
  @ViewChild(FormGeneratorComponent) formRef!:FormGeneratorComponent
  protected rowData:UnitInterface[]=[];
  private editMode:boolean=false
  private selectedData!:UnitInterface
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
        label:"نام واحد",
        defaultValue:"",
        validation:[Validators.required],
        formType:"fc"
      },
      {
        name:"dateEstablishment",
        type:"input",
        label:"تاریخ تاسیس",
        defaultValue:"",
        validation:[Validators.required],
        formType:"fc"
      },
      {
        name:"status",
        type:"radio",
        label:"وضعیت",
        defaultValue:"",
        options:[
          {
            key:"active",
            value:"فعال"
          },
          {
            key:"deActive",
            value:"غیر فعال"
          }
        ],
        validation:[Validators.required],
        formType:"fc"
      },
      ],
  }

  gridOptions:GridOptions={
    columnDefs:[
      {headerName:"آی دی",field:"id",checkboxSelection:true},
      {headerName:"نام سازمان",field:"name"},
      {headerName:"وضعیت",field:"status",cellRenderer:StatusRendererComponent},
      {headerName:"تاریخ تاسیس",field:"dateEstablishment"},
    ]
  }
  protected onSubmit(formGroupValue:UnitInterface){
    const oldData:UnitInterface[]=this.gridRef.rowData
    if(this.editMode && this.selectedData){
      const index=oldData.findIndex(d=>d.id==this.selectedData.id)
      oldData.splice(index,1)
      this.rowData=this.insert(oldData, index, {...formGroupValue,id:this.selectedData.id})
    }else{
      this.rowData=[...oldData,{...formGroupValue,id:Math.random()}]
    }
  }
  private insert = (arr:UnitInterface[], index:number, newItem:UnitInterface) => [
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
      status:this.selectedData?.status,
      dateEstablishment:this.selectedData?.dateEstablishment,
    })
  }
  ngOnInit(){
    this.appServices.getData<UnitInterface>("units").subscribe(res=>{
      this.rowData=res
    })
  }
  ngAfterViewInit() {
    setTimeout(()=>{
      this.formRef.formGroup.controls['id'].disable()
    },0)
  }
}
