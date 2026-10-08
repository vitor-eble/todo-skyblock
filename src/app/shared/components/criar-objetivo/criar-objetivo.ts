import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CriarTarefa } from '../../services/criar-tarefa';
import { Observable } from 'rxjs';
import { Tarefa } from '../../models/tarefa';
import { TypeIcon } from '../../models/typeIconModel';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { tipoIcons } from '../../icons/typeIcon';
import { TypesObjectives } from '../../services/types-objectives';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

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
  types: TypeIcon[] = [];
  typesIcons: Record<string, IconDefinition> = tipoIcons;
  types$!: Observable<TypeIcon[]>
  tipo!: string;
  tipoSelecionado: string | null = null;


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
      dataCriation: [null, Validators.required]
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
    console.log(this.formulario.get('tarefaTitle')?.value);
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

  tipoObjetivoSelecionado(tipo: string) {
    this.tipoSelecionado = this.tipoSelecionado === tipo ? null : tipo;
  }

}
