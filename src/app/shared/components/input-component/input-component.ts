import { Component, Input } from '@angular/core';

import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-input-component',
  standalone: false,
  templateUrl: './input-component.html',
  styleUrl: './input-component.css',
})
export class InputComponent {

  @Input() tipe!: string;
  @Input() title!: string;
  @Input() placeholder!: string;
  @Input() icon!: IconDefinition;
  @Input() ariaLabel!: string;
}
