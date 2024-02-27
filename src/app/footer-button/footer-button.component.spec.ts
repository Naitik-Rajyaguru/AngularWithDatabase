import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterButtonComponent } from './footer-button.component';

describe('FooterButtonComponent', () => {
  let component: FooterButtonComponent;
  let fixture: ComponentFixture<FooterButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterButtonComponent]
    });
    fixture = TestBed.createComponent(FooterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
