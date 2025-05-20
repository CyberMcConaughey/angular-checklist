import { Component } from '@angular/core';
import { UsrBPMCheckList } from './checklist/checklist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UsrBPMCheckList],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
}