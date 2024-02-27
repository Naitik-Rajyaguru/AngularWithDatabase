import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolediscriptionComponent } from './rolediscription.component';

describe('RolediscriptionComponent', () => {
  let component: RolediscriptionComponent;
  let fixture: ComponentFixture<RolediscriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RolediscriptionComponent]
    });
    fixture = TestBed.createComponent(RolediscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
