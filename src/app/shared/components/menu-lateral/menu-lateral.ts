import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faXmark, faGear } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-menu-lateral',
  standalone: false,
  templateUrl: './menu-lateral.html',
  styleUrl: './menu-lateral.css',
})
export class MenuLateral {

  @Input() menuAberto: boolean = false;
  @Output() fecharMenu = new EventEmitter<void>();

  faXmark = faXmark;
  faGear = faGear;

  fechar(){
    this.fecharMenu.emit();
  }
}
