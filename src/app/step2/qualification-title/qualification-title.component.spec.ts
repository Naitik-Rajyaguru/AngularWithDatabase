import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationTitleComponent } from './qualification-title.component';

describe('QualificationTitleComponent', () => {
  let component: QualificationTitleComponent;
  let fixture: ComponentFixture<QualificationTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QualificationTitleComponent]
    });
    fixture = TestBed.createComponent(QualificationTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
