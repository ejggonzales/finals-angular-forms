import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent {
  title = 'Template Driven Form';
  anyname: string = "";
  anypass: string = "";
  anyemail: string = "";
  anymessage: string = "";
  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
  }
}
