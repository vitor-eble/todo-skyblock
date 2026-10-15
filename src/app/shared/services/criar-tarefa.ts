import { Injectable } from '@angular/core';
import { Tarefa } from '../models/tarefa';
import { BehaviorSubject } from 'rxjs';
import { SubObjetivos } from '../models/SubObjetivos';

@Injectable({ providedIn: 'root'})
export class CriarTarefa {

  private tarefasSubject = new BehaviorSubject<Tarefa[]>([]);
  private subObjetivos: SubObjetivos[] = [];

  tarefas$ = this.tarefasSubject.asObservable();

  criarObjetivo(title: string, tDescription: string,type: string, subObjetivos: SubObjetivos[]) {
    const novaTarefa: Tarefa = {
      id: this.tarefasSubject.value.length + 1,
      title: title,
      description: tDescription,
      type: type,
      dataCriation: new Date(),
      subObjetivos: [...subObjetivos]
    };
    const tarefasAtuais = this.tarefasSubject.value;
    this.tarefasSubject.next([...tarefasAtuais, novaTarefa]);
    this.subObjetivos = [];
  }

  deletarObjetivo(id:number){
    const tarefasAtuais = this.tarefasSubject.value;
    const tarefasFiltradas = tarefasAtuais.filter(tarefa => tarefa.id !== id);
    this.tarefasSubject.next(tarefasFiltradas);
  }

  addSubObjetivo(title: string) {
    const novoSubObjetivo: SubObjetivos = {
      id: Date.now(),
      title: title,
      completed: false
    };
    this.subObjetivos = [...this.subObjetivos, novoSubObjetivo];
  }

  removerSubObjetivo(id: number) {
    this.subObjetivos = this.subObjetivos.filter(sub => sub.id !== id);
  }

  getSubObjetivos(): SubObjetivos[] {
    return [...this.subObjetivos];
  }

  limparSubObjetivos(): void {
    this.subObjetivos = [];
  }
}
