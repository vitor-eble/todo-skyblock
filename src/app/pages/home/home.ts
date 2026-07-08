import { Component } from '@angular/core';
import { Tarefa } from '../../shared/models/tarefa'

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  tarefaTitle: string = '';

  tarefas: Tarefa[] = [];

  addTarefa(){
    console.log('click');
    this.tarefas.push({id: this.tarefas.length + 1, title: this.tarefaTitle})
    this.tarefaTitle = '';
  }

}
