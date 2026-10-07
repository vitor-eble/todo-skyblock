import { Injectable } from '@angular/core';
import { Tarefa } from '../models/tarefa';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class CriarTarefa {

  private tarefasSubject = new BehaviorSubject<Tarefa[]>([]);

  tarefas$ = this.tarefasSubject.asObservable();

  criarObjetivo(title: string, tDescription: string, tDataCriation: number) {
    const novaTarefa: Tarefa = {
      id: this.tarefasSubject.value.length + 1,
      title: title,
      description: tDescription,
      dataCriation: tDataCriation
    };
    const tarefasAtuais = this.tarefasSubject.value;
    this.tarefasSubject.next([...tarefasAtuais, novaTarefa]);
  }

  deletarObjetivo(id:number){
    const tarefasAtuais = this.tarefasSubject.value;
    const tarefasFiltradas = tarefasAtuais.filter(tarefa => tarefa.id !== id);
    this.tarefasSubject.next(tarefasFiltradas);
  }

}
