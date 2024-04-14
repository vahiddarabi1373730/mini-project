import { Component } from '@angular/core';
import {ICellRendererAngularComp} from "ag-grid-angular";
import {ICellRendererParams} from "ag-grid-community";

@Component({
  selector: 'app-gender-cell-renderer',
  templateUrl: './gender-cell-renderer.component.html',
  styleUrl: './gender-cell-renderer.component.scss'
})
export class GenderCellRendererComponent implements ICellRendererAngularComp{
  protected params!:ICellRendererParams
  agInit(params: ICellRendererParams): void {
    this.params=params
  }

  refresh(params: ICellRendererParams<any>): boolean {
    return false;
  }

}
