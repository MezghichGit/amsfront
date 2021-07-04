import { Component } from '@angular/core';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :string = 'Application AMS v1.0';
  formation : string = "Angular";
  vh:number = 40;
}
