import { TestBed } from '@angular/core/testing';

import { TypesObjectives } from './types-objectives';

describe('TypesObjectives', () => {
  let service: TypesObjectives;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypesObjectives);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
