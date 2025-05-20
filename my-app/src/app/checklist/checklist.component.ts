import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // добавляем импорт
import { FormsModule } from '@angular/forms';

interface ChecklistItem {
  text: string;
  checked: boolean;
}

@Component({
  selector: 'app-checklist',
  standalone: true,
  imports: [CommonModule, FormsModule], // добавляем CommonModule
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent {
  items: ChecklistItem[] = [];
  newItemText = '';

  addItem() {
    const text = this.newItemText.trim(); // Убираем лишние пробелы
    if (text) {
      this.items.push({ text, checked: false }); // Добавляем новый пункт
      this.newItemText = ''; // Очищаем поле ввода
    }
  }
}