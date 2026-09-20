import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blaze } from './blaze';

describe('Blaze', () => {
  let component: Blaze;
  let fixture: ComponentFixture<Blaze>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Blaze],
    }).compileComponents();

    fixture = TestBed.createComponent(Blaze);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
