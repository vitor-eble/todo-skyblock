import { App } from './../../app';
import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../../shared/models/tarefa';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { HttpClient } from '@angular/common/http';
import { TypeIcon } from '../../shared/models/typeIconModel';
import { tipoIcons } from '../../shared/icons/typeIcon';


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

  mostrarTarefa: boolean = false;

  types: TypeIcon[] = [];
  typesIcons: Record<string, IconDefinition> = tipoIcons;

  faEye = faEye;
  faEyeSlash = faEyeSlash;

  tarefas: Tarefa[] = [];
  formulario!: FormGroup;

  constructor(
    private FB: FormBuilder,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.formulario = this.FB.group({
      tarefaTitle: [this.tarefaTitle, Validators.required],
      tarefaDescription: [this.tarefaDescription],
      dataCriation: [this.dataCriation, Validators.required]
    })

    this.carregarTipos();
  }

carregarTipos(): void {
  this.http
    .get<TypeIcon[]>('assets/dados/typesObjectives.json')
    .subscribe({
      next: (data) => {
        this.types = data;
        console.log('Tipos carregados:', this.types);
        console.log('Ícones:', this.typesIcons);
      },
      error: (error) => {
        console.error('Erro ao carregar os tipos:', error);
      }
    });
}

  getTipoNome(tipo: string): any{
    const nomes: Record<string, string> = {
      mining: 'Mining',
      blaze: 'Blaze slayer',
      eman: 'Eman slayer',
      fishing: 'Fishing',
      mp: 'Magical Power',
    };
    return nomes[tipo] ?? tipo;
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

  cancelarFormulario(){
    this.formulario.reset();
  }

  verTarefa(verTarefa: Tarefa){
    this.mostrarTarefa = !this.mostrarTarefa;
  }

}
