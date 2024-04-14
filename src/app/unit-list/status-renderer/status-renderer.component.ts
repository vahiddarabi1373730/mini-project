import { Component } from '@angular/core';
import {ICellRendererAngularComp} from "ag-grid-angular";
import {ICellRendererParams} from "ag-grid-community";

@Component({
  selector: 'app-status-renderer',
  templateUrl: './status-renderer.component.html',
  styleUrl: './status-renderer.component.scss'
})
export class StatusRendererComponent implements ICellRendererAngularComp{
  protected params!:ICellRendererParams
  agInit(params: ICellRendererParams): void {
    this.params=params
  }

  refresh(params: ICellRendererParams<any>): boolean {
    return false;
  }

  protected readonly Boolean = Boolean;
}
