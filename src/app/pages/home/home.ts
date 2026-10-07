import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Tarefa } from '../../shared/models/tarefa';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEye, faEyeSlash, faPlus, faBars } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { HttpClient } from '@angular/common/http';
import { TypesObjectives } from './../../shared/services/types-objectives';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CriarTarefa } from '../../shared/services/criar-tarefa';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  tarefaTitle: string = '';
  tarefaDescription: string = '';
  dataCriation!: number;
  menuAberto: boolean = false;
  criarObjetivoModal: boolean = false
  tarefas$: Observable<Tarefa[]>;

  tarefaAbertaId: number | null = null;

  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faPlus = faPlus;
  faBars = faBars;

  constructor(
    private faIconLibrary: FaIconLibrary,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private criarTarefa: CriarTarefa,
  ) {
    this.faIconLibrary.addIcons(faEye, faEyeSlash, faPlus, faBars);
    this.tarefas$ = this.criarTarefa.tarefas$;
  }

  ngOnInit() {
    try {
      this.cdr.detectChanges();
    } catch (e) {
          // detectChanges pode lançar se já estivermos no ciclo de detecção; ignore nesse caso
    }
  }

  abrirTipo(tipo: string): any{
    this.router.navigate(['/home',tipo.toLowerCase()])
    this.menuAberto = false
  }

  verTarefa(tarefa: Tarefa): void {
    this.tarefaAbertaId = this.tarefaAbertaId === tarefa.id ? null : tarefa.id;
  }

  excluirObjetivo(id: number): void {
    this.criarTarefa.deletarObjetivo(id);
  }

  toggleMenu(): void {
    this.menuAberto = !this.menuAberto;
  }

  toggleModal(): void {
    this.criarObjetivoModal = !this.criarObjetivoModal
  }

}
