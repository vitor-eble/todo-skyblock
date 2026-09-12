import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  faEnvelope = faEnvelope;

  constructor(private faIconLibrary: FaIconLibrary) {
    this.faIconLibrary.addIcons(faEnvelope);
  }
}
