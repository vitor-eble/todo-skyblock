import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarObjetivo } from './criar-objetivo';

describe('CriarObjetivo', () => {
  let component: CriarObjetivo;
  let fixture: ComponentFixture<CriarObjetivo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CriarObjetivo],
    }).compileComponents();

    fixture = TestBed.createComponent(CriarObjetivo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
