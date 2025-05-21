import { Component, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Subject } from "rxjs";

export interface ChecklistItem {
  text: string;
  checked: boolean;
  editing?: boolean;
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
  public editText: string = "";
  public dragIndex: number | null = null;
  public overIndex: number | null = null;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {}

  public addItem(): void {
    const text = this.newItemText.trim();
    if (text) {
      this.items.push({ text, checked: false });
      this.newItemText = "";
      this.cdRef.detectChanges();
    }
  }

  public toggleItem(index: number): void {
    if (index >= 0 && index < this.items.length) {
     // this.items[index].checked = !this.items[index].checked;
      //this.cdRef.detectChanges();
    }
  }

  public removeItem(index: number): void {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
      this.cdRef.detectChanges();
    }
  }

  public editItem(index: number): void {
    this.items.forEach((item, i) => item.editing = false);
    this.items[index].editing = true;
    this.editText = this.items[index].text;
    this.cdRef.detectChanges();
  }

  public saveEdit(index: number): void {
    const text = this.editText.trim();
    if (text) {
      this.items[index].text = text;
      this.items[index].editing = false;
      this.editText = "";
      this.cdRef.detectChanges();
    }
  }

  public cancelEdit(index: number): void {
    this.items[index].editing = false;
    this.editText = "";
    this.cdRef.detectChanges();
  }

  // Drag and drop handlers
  public dragStart(index: number): void {
    this.dragIndex = index;
  }

  public dragOver(index: number, event: DragEvent): void {
    event.preventDefault();
    this.overIndex = index;
  }

  public drop(index: number): void {
    if (this.dragIndex === null || this.dragIndex === index) return;
    const moved = this.items.splice(this.dragIndex, 1)[0];
    this.items.splice(index, 0, moved);
    this.dragIndex = null;
    this.overIndex = null;
    this.cdRef.detectChanges();
  }

  public dragEnd(): void {
    this.dragIndex = null;
    this.overIndex = null;
  }

  public allCompleted(): boolean {
    return this.items.length > 0 && this.items.every(item => item.checked);
  }

  public finish(): void {
    alert("Чек-лист завершён!");
    this.items = [];
    this.cdRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}