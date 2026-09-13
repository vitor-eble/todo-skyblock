import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  faEnvelope = faEnvelope;
  faLock = faLock;

  constructor(
    private faIconLibrary: FaIconLibrary,
    private router: Router
  ) {
    this.faIconLibrary.addIcons(faEnvelope, faLock);
  }

  login() {
    this.router.navigate(['/home']);
  }
}
