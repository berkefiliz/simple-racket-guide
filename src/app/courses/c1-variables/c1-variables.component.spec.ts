import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1VariablesComponent } from './c1-variables.component';

describe('C1VariablesComponent', () => {
  let component: C1VariablesComponent;
  let fixture: ComponentFixture<C1VariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1VariablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C1VariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
