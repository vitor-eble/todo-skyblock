import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CriarTarefa } from '../../services/criar-tarefa';
import { Observable } from 'rxjs';
import { Tarefa } from '../../models/tarefa';
import { TypeIcon } from '../../models/typeIconModel';
import { faTrash, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { tipoIcons } from '../../icons/typeIcon';
import { TypesObjectives } from '../../services/types-objectives';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { SubObjetivos } from '../../models/SubObjetivos';

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
  types$!: Observable<TypeIcon[]>

  types: TypeIcon[] = [];
  subObjetivos: SubObjetivos[] = [];

  typesIcons: Record<string, IconDefinition> = tipoIcons;
  tipo!: string;
  tipoSelecionado: string | null = null;

  faTrash = faTrash;


  constructor(
    private cdr: ChangeDetectorRef,
    private FB: FormBuilder,
    private criarTarefa: CriarTarefa,
    private typesObjectivesService: TypesObjectives,
  ) {
    this.tarefas$ = this.criarTarefa.tarefas$;
    this.types$ = this.typesObjectivesService.getTypesObjectives();
  }

  ngOnInit() {
    this.formulario = this.FB.group({
      tarefaTitle: [null, Validators.required],
      tarefaDescription: [null, Validators.required],
      tarefaType: [null, Validators.required],
      subObjetivoTitle: [''],
    });
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

  addTarefa(){
    this.criarTarefa.criarObjetivo(
      this.formulario.get('tarefaTitle')?.value,
      this.formulario.get('tarefaDescription')?.value,
      this.formulario.get('tarefaType')?.value,
      this.criarTarefa.getSubObjetivos(),
    );
    this.criarTarefa.limparSubObjetivos();
    this.resetFormulario();
    this.fecharModalObjetivo.emit();
  }

  addSubObjetivo() {
    const title = this.formulario.get('subObjetivoTitle')?.value?.trim();
    if (!title) {
      return;
    }

    this.criarTarefa.addSubObjetivo(title);
    this.formulario.get('subObjetivoTitle')?.reset('');
    this.formulario.markAsPristine();
    this.formulario.markAsUntouched();
    this.atualizarSubObjetivos();
  }

  fecharModal(){
    this.fecharModalObjetivo.emit();
    this.resetFormulario();
    this.subObjetivos = [];
    this.criarTarefa.limparSubObjetivos();
  }

  resetFormulario(): void {
    this.formulario.reset({
      tarefaTitle: null,
      tarefaDescription: null,
      tarefaType: null,
      subObjetivoTitle: ''
    });
    this.subObjetivos = [];
    this.tipoSelecionado = null;
    this.formulario.markAsPristine();
    this.formulario.markAsUntouched();
    this.formulario.updateValueAndValidity();
  }

  tipoObjetivoSelecionado(tipo: string) {
    const novoTipo = this.tipoSelecionado === tipo ? null : tipo;
    this.tipoSelecionado = novoTipo;
    this.formulario.get('tarefaType')?.setValue(novoTipo);
  }

  removerSubObjetivo(id: number): void {
    this.criarTarefa.removerSubObjetivo(id);
    this.atualizarSubObjetivos();
  }

  atualizarSubObjetivos(): void {
    this.subObjetivos = this.criarTarefa.getSubObjetivos();
  }

}
