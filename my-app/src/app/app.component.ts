import { Component } from "@angular/core";
import { UsrAngularCheck } from "./checklist/checklist.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [UsrAngularCheck],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "my-app";
}