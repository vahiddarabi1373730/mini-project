import { ApplicationConfig } from '@angular/core';
import {provideRouter, Routes} from '@angular/router';
import {provideHttpClient} from "@angular/common/http";
import {BrowserAnimationsModule, NoopAnimationsModule, provideAnimations} from "@angular/platform-browser/animations";

const routes:Routes=[
  {
    path:"unit-list",loadChildren:()=>import('./unit-list/unit-list.module').then(m=>m.UnitListModule)
  },
  {
    path:"employee-list",loadChildren:()=>import('./employees/employees.module').then(m=>m.EmployeesModule)
  }
]

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(), provideAnimations()]
};
