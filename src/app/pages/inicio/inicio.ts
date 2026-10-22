import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Tarefa } from '../../shared/models/tarefa';
import { Observable } from 'rxjs';
import { CriarTarefa } from '../../shared/services/criar-tarefa';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { SubObjetivos } from '../../shared/models/SubObjetivos';

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio implements OnInit {

  tarefas$: Observable<Tarefa[]>;

  tarefaAbertaId: number | null = null;

  faEye = faEye;
  faEyeSlash = faEyeSlash;

  constructor(
    private faIconLibrary: FaIconLibrary,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private criarTarefa: CriarTarefa,
  ) {
    this.faIconLibrary.addIcons(faEye, faEyeSlash);
    this.tarefas$ = this.criarTarefa.tarefas$;
  }

  ngOnInit() {
    try {
      this.cdr.detectChanges();
    } catch (e) {

    }
  }

  verTarefa(tarefa: Tarefa): void {
    this.tarefaAbertaId = this.tarefaAbertaId === tarefa.id ? null : tarefa.id;
  }

  excluirObjetivo(id: number): void {
    this.criarTarefa.deletarObjetivo(id);
  }

  atualizarSubObjetivo(
    sub: SubObjetivos,
    event: Event
  ): void {
    const checkbox = event.target as HTMLInputElement;
    sub.completed = checkbox.checked;
  }


}
