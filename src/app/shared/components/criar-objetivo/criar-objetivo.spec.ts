import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { CriarObjetivo } from './criar-objetivo';

describe('CriarObjetivo', () => {
  let component: CriarObjetivo;
  let fixture: ComponentFixture<CriarObjetivo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CriarObjetivo],
      imports: [ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(CriarObjetivo);
    component = fixture.componentInstance;
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
});
