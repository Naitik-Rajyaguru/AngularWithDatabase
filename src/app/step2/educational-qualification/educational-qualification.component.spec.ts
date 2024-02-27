import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalQualificationComponent } from './educational-qualification.component';

describe('EducationalQualificationComponent', () => {
  let component: EducationalQualificationComponent;
  let fixture: ComponentFixture<EducationalQualificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EducationalQualificationComponent]
    });
    fixture = TestBed.createComponent(EducationalQualificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
