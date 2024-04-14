import {Component, EventEmitter, Input, Output} from '@angular/core';
import {KeyValueInterface} from "../_models/models.interface";
import {ThemePalette} from "@angular/material/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  constructor(private router:Router) {
  }
   tabs: KeyValueInterface[]=[
     {key:"employees",value:"کارمندان"},
     {key:"units",value:"سازمان ها"}
   ];
  @Output() activeLinkEmitter = new EventEmitter<KeyValueInterface>();

  activeLink: KeyValueInterface={value:"کارکنان",key:"employees"};

  background: ThemePalette = undefined;

  onClick(tab: KeyValueInterface) {
    if(tab.key==='units'){
      this.router.navigate(['unit-list'])
    }
    if(tab.key==='employees'){
      this.router.navigate(['employee-list'])
    }
    this.activeLink = tab;
    this.activeLinkEmitter.emit(tab);
  }
}
