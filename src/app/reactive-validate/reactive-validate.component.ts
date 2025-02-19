import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-validate',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './reactive-validate.component.html',
  styleUrl: './reactive-validate.component.css'
})
export class ReactiveValidateComponent {
  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      userPass: new FormControl('', [Validators.required, Validators.minLength(6)]),
      userMessage: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted!', this.loginForm.value);
    } else {
      console.log('Form is not valid');
    }
  }
}
