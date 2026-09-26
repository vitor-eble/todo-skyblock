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

  tarefaAbertaId: number | null = null;

  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faPlus = faPlus;
  faBars = faBars;

  tarefas: Tarefa[] = [];
  formulario!: FormGroup;

  constructor(
    private FB: FormBuilder,
    private faIconLibrary: FaIconLibrary,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {
    this.faIconLibrary.addIcons(faEye, faEyeSlash, faPlus, faBars);
  }

  ngOnInit() {
    this.formulario = this.FB.group({
      tarefaTitle: [this.tarefaTitle, Validators.required],
      tarefaDescription: [this.tarefaDescription],
      dataCriation: [this.dataCriation, Validators.required]
    });

    try {
      this.cdr.detectChanges();
    } catch (e) {
          // detectChanges pode lançar se já estivermos no ciclo de detecção; ignore nesse caso
    }
  }

  addTarefa(){
    console.log('click');
    this.tarefas.push({
      id: this.tarefas.length + 1,
      title: this.formulario.get('tarefaTitle')?.value,
      description: this.formulario.get('tarefaDescription')?.value,
      dataCriation: this.formulario.get('dataCriation')?.value,
    })
    this.formulario.reset();
  }

  abrirTipo(tipo: string): any{
    this.router.navigate(['/home',tipo.toLowerCase()])
    this.menuAberto = false
  }

  cancelarFormulario(){
    this.formulario.reset();
  }

  verTarefa(tarefa: Tarefa): void {
    this.tarefaAbertaId = this.tarefaAbertaId === tarefa.id ? null : tarefa.id;
  }

  toggleMenu(): void {
    this.menuAberto = !this.menuAberto;
  } 

  toggleModal(): void {
    this.criarObjetivoModal = !this.criarObjetivoModal
  }

}
