import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'finals-project';

  showWelcomeDiv: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.showWelcomeDiv = this.router.url === '/';
    });
  }
}
