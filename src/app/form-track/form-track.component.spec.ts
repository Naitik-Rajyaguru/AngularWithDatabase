import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTrackComponent } from './form-track.component';

describe('FormTrackComponent', () => {
  let component: FormTrackComponent;
  let fixture: ComponentFixture<FormTrackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormTrackComponent]
    });
    fixture = TestBed.createComponent(FormTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
