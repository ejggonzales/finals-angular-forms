import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  title = 'Reactive Form'
  userName: string = '';
  userEmail: string = '';
  userPass: string = '';
  userMessage: string = '';
  submitted: boolean = false;

  formdata: FormGroup = new FormGroup({
    userName: new FormControl(""),
    userEmail: new FormControl(""),
    userPass: new FormControl(""),
    userMessage: new FormControl(""),
  });

  onClickSubmit(data: { userName: string, userEmail: string, userPass: string, userMessage: string }) {
    this.userName = data.userName;
    this.userEmail = data.userEmail;
    this.userPass = data.userPass;
    this.userMessage = data.userMessage;
    this.submitted = true;
  }
}
