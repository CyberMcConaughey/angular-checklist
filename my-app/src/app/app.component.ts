import { Component } from '@angular/core';
import { ChecklistComponent } from './checklist/checklist.component'; // Импортируем ChecklistComponent

@Component({
  selector: 'app-root',
  standalone: true, // Указываем, что компонент standalone
  imports: [ChecklistComponent], // Добавляем ChecklistComponent в imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
}