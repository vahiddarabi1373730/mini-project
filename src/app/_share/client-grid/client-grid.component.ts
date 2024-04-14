import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ColDef, GridApi, GridOptions, GridReadyEvent, SelectionChangedEvent} from "ag-grid-community";
import {HttpClient} from "@angular/common/http";
import {AppServices} from "../../_services/app-services.service";
import {EmployeeInterface} from "../../_models/models.interface";

@Component({
  selector: 'app-client-grid',
  templateUrl: './client-grid.component.html',
  styleUrl: './client-grid.component.scss'
})
export class ClientGridComponent implements OnInit{
constructor(private appServicesService:AppServices) {
}

  private _rowData!:any[];
  @Input() set rowData(rowData:any[]){
    this._rowData=rowData
  }
  get rowData(){
    return this._rowData
  }
  @Output() selectedRowEmitter = new EventEmitter<SelectionChangedEvent>();
  public gridApi!: GridApi;
  public columnDefs!: ColDef[] | undefined | null;
  private _gridOptions!: GridOptions;
  @Input() set gridOptions(gridOptions: GridOptions) {
    this._gridOptions = {
      ...gridOptions,
      defaultColDef: {
        resizable: true,
        minWidth: 100,
      },
      onGridSizeChanged() {
        gridOptions.autoSizeStrategy
      },
    };
    this.columnDefs = gridOptions.columnDefs;
  }

  get gridOptions() {
    return this._gridOptions;
  }

  onGridReady(params: GridReadyEvent<any>) {
    this.gridApi = params.api;
    params.api.sizeColumnsToFit();
  }

  ngOnInit() {
  }
}
