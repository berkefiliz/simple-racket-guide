import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutGuideComponent } from './about-guide.component';

describe('AboutGuideComponent', () => {
  let component: AboutGuideComponent;
  let fixture: ComponentFixture<AboutGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
