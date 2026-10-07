import { Component, EventEmitter, Input, Output, ChangeDetectorRef } from '@angular/core';
import { faXmark, faGear } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { Observable } from 'rxjs';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { TypeIcon } from '../../models/typeIconModel';
import { tipoIcons } from '../../icons/typeIcon';
import { TypesObjectives } from '../../services/types-objectives';


@Component({
  selector: 'app-menu-lateral',
  standalone: false,
  templateUrl: './menu-lateral.html',
  styleUrl: './menu-lateral.css',
})
export class MenuLateral {

  @Input() menuAberto: boolean = false;
  @Output() fecharMenu = new EventEmitter<void>();
  @Output() tipoObjetivoSelecionado = new EventEmitter<string>();

  types: TypeIcon[] = [];
  typesIcons: Record<string, IconDefinition> = tipoIcons;
  types$!: Observable<TypeIcon[]>

  faXmark = faXmark;
  faGear = faGear;

  constructor(
    private cdr: ChangeDetectorRef,
    private typesObjectivesService: TypesObjectives,
    private faIconLibrary: FaIconLibrary,
  ){
    this.faIconLibrary.addIcons(faXmark, faGear);
    this.types$ = this.typesObjectivesService.getTypesObjectives();
  }

  ngOnInit(){
    this.types$.subscribe({
      next: (data) => {
        this.types = data;
        try {
          this.cdr.detectChanges();
        } catch (e) {
          console.log(e);
        }
      }
    });
  }

  getTipoNome(tipo: string): any{
    const nomes: Record<string, string> = {
      mining: 'Mining',
      blaze: 'Blaze slayer',
      eman: 'Eman slayer',
      fishing: 'Fishing',
      farming: 'Farming',
      mp: 'Magical Power',
    };
    return nomes[tipo] ?? tipo;
  }

  selecionarTipoObjetivo(tipo: TypeIcon){
    this.tipoObjetivoSelecionado.emit(tipo.name)
  }

  fechar(){
    this.fecharMenu.emit();
  }
}
