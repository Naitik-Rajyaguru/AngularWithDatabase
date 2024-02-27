import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCancleComponent } from './create-cancle.component';

describe('CreateCancleComponent', () => {
  let component: CreateCancleComponent;
  let fixture: ComponentFixture<CreateCancleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCancleComponent]
    });
    fixture = TestBed.createComponent(CreateCancleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
