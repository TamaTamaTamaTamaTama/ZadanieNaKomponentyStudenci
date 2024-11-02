import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BusinessComponent } from './business/business.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BusinessComponent],
  template: `<h1>{{title }}</h1>
<app-business></app-business>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Business Card';
}
