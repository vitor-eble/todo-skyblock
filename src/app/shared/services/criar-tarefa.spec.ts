import { TestBed } from '@angular/core/testing';

import { CriarTarefa } from './criar-tarefa';

describe('CriarTarefa', () => {
  let service: CriarTarefa;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriarTarefa);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
