import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {translateEducation} from "../../_share/_functions/translate-education";
import {translateGender} from "../../_share/_functions/translate-gender";

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrl: './detail-employee.component.scss'
})
export class DetailEmployeeComponent {
  protected dataSource:any

  constructor(private router:Router) {
    this.dataSource=Array((router.getCurrentNavigation()?.extras?.state as any).data);
  }
  displayedColumns: string[] = ['id', 'name', 'gender', 'education','unitId','mobile'];
  protected readonly translateEducation = translateEducation;
  protected readonly translateGender = translateGender;
}
