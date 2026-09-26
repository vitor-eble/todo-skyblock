import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-criar-objetivo',
  standalone: false,
  templateUrl: './criar-objetivo.html',
  styleUrl: './criar-objetivo.css',
})
export class CriarObjetivo {

  @Input() criarObjetivoModal: boolean = false;
  @Output() fecharModalObjetivo = new EventEmitter<void>()


  fecharModal(){
    this.fecharModalObjetivo.emit()
  }

}
