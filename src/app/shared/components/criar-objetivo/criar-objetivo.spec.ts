import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { CriarObjetivo } from './criar-objetivo';
import { CriarTarefa } from '../../services/criar-tarefa';

describe('CriarObjetivo', () => {
  let component: CriarObjetivo;
  let fixture: ComponentFixture<CriarObjetivo>;
  let criarTarefa: CriarTarefa;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CriarObjetivo],
      imports: [ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [CriarTarefa],
    }).compileComponents();

    fixture = TestBed.createComponent(CriarObjetivo);
    component = fixture.componentInstance;
    criarTarefa = TestBed.inject(CriarTarefa);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a subobjetivo from the subobjetivo input value', () => {
    component.formulario.get('subObjetivoTitle')?.setValue('Estudar Angular');

    component.addSubObjetivo();

    expect(component.subObjetivos.length).toBe(1);
    expect(component.subObjetivos[0].title).toBe('Estudar Angular');
  });

  it('should reset the task form and clear subtasks after creating a task', () => {
    component.formulario.get('tarefaTitle')?.setValue('Objetivo principal');
    component.formulario.get('tarefaDescription')?.setValue('Descrição do objetivo');
    component.formulario.get('subObjetivoTitle')?.setValue('Sub tarefa');
    component.addSubObjetivo();

    component.addTarefa();

    expect(component.formulario.get('tarefaTitle')?.value).toBeNull();
    expect(component.formulario.get('tarefaDescription')?.value).toBeNull();
    expect(component.formulario.get('subObjetivoTitle')?.value).toBeNull();
    expect(criarTarefa.getSubObjetivos().length).toBe(0);
  });
});
