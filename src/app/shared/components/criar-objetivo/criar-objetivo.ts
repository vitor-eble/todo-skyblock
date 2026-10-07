import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CriarTarefa } from '../../services/criar-tarefa';
import { Observable } from 'rxjs';
import { Tarefa } from '../../models/tarefa';

@Component({
  selector: 'app-criar-objetivo',
  standalone: false,
  templateUrl: './criar-objetivo.html',
  styleUrl: './criar-objetivo.css',
})
export class CriarObjetivo {

  @Input() criarObjetivoModal: boolean = false;
  @Output() fecharModalObjetivo = new EventEmitter<void>()

  formulario!: FormGroup;
  tarefas$: Observable<Tarefa[]>;

  constructor(
    private FB: FormBuilder,
    private criarTarefa: CriarTarefa,
  ) {
    this.tarefas$ = this.criarTarefa.tarefas$;
  }

  ngOnInit() {
    this.formulario = this.FB.group({
      tarefaTitle: [null, Validators.required],
      tarefaDescription: [null, Validators.required],
      dataCriation: [null, Validators.required]
    });
  }

  addTarefa(){
    this.criarTarefa.criarObjetivo(
      this.formulario.get('tarefaTitle')?.value,
      this.formulario.get('tarefaDescription')?.value,
      this.formulario.get('dataCriation')?.value
    );
    this.formulario.reset();
    this.fecharModalObjetivo.emit();
  }

  fecharModal(){
    this.fecharModalObjetivo.emit();
    this.formulario.reset();
  }

}
