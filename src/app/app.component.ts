import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MenuModule} from "./menu/menu.module";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MenuModule],
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'app';

}
