import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationsComponent } from './qualifications.component';

describe('QualificationsComponent', () => {
  let component: QualificationsComponent;
  let fixture: ComponentFixture<QualificationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QualificationsComponent]
    });
    fixture = TestBed.createComponent(QualificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
