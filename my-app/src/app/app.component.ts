import { Component } from '@angular/core';
import { AngularChecklistComponent } from './checklist/checklist.component'; // Импортируем AngularChecklistComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AngularChecklistComponent], // Добавляем AngularChecklistComponent в imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
}