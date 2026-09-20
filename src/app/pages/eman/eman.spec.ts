import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eman } from './eman';

describe('Eman', () => {
  let component: Eman;
  let fixture: ComponentFixture<Eman>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Eman],
    }).compileComponents();

    fixture = TestBed.createComponent(Eman);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
