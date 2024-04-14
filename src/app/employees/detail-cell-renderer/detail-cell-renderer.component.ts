import { Component } from '@angular/core';
import {ICellRendererAngularComp} from "ag-grid-angular";
import {ICellRendererParams} from "ag-grid-community";
import {Router} from "@angular/router";

@Component({
  selector: 'app-detail-cell-renderer',
  templateUrl: './detail-cell-renderer.component.html',
  styleUrl: './detail-cell-renderer.component.scss'
})
export class DetailCellRendererComponent implements ICellRendererAngularComp{
  constructor(private router:Router) {
  }
  protected params!:ICellRendererParams
  agInit(params: ICellRendererParams): void {
    this.params=params
  }

  refresh(params: ICellRendererParams<any>): boolean {
    return false;
  }

  protected onClick(){

    this.router.navigate([`employee-list/${this.params.data.id}`],{
      state:{
        data:this.params.data
      }
    })
  }

}
