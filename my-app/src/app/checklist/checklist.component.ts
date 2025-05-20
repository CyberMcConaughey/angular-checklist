import { Component, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Subject } from "rxjs";

export interface ChecklistItem {
  text: string;
  checked: boolean;
}

@Component({
  selector: "usr-bpm-check-list",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./checklist.component.html",
  styleUrls: ["./checklist.component.css"],
})
export class UsrBPMCheckList implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  public items: ChecklistItem[] = [];
  public newItemText: string = "";

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log("UsrBPMCheckList инициализирован");
  }

  public addItem(): void {
    const text = this.newItemText.trim();
    if (text) {
      this.items.push({ text, checked: false });
      this.newItemText = "";
      this.cdRef.detectChanges();
      console.log("Добавлен пункт:", text);
    }
  }

  public toggleItem(index: number): void {
    if (index >= 0 && index < this.items.length) {
      this.items[index].checked = !this.items[index].checked;
      this.cdRef.detectChanges();
      console.log("Изменено состояние пункта:", this.items[index]);
    }
  }

  public removeItem(index: number): void {
    if (index >= 0 && index < this.items.length) {
      const confirmed = window.confirm(`Удалить пункт «${this.items[index].text}»?`);
      if (confirmed) {
        console.log("Удаляется пункт:", this.items[index].text);
        this.items.splice(index, 1);
        this.cdRef.detectChanges();
      }
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    console.log("UsrBPMCheckList уничтожен");
  }
}