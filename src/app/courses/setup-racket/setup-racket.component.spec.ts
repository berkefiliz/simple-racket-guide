import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupRacketComponent } from './setup-racket.component';

describe('SetupRacketComponent', () => {
  let component: SetupRacketComponent;
  let fixture: ComponentFixture<SetupRacketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupRacketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupRacketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
