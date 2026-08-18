import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../../shared/models/tarefa';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  tarefaTitle: string = '';
  tarefaDescription: string = '';
  dataCriation!: number;

  mostrarTarefa: boolean = false;

  faEye = faEye;
  faEyeSlash = faEyeSlash;

  tarefas: Tarefa[] = [];
  formulario!: FormGroup;

  constructor(
    private FB: FormBuilder,
  ) { }

  ngOnInit() {
    this.formulario = this.FB.group({
      tarefaTitle: [this.tarefaTitle, Validators.required],
      tarefaDescription: [this.tarefaDescription],
      dataCriation: [this.dataCriation, Validators.required]
    })
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
