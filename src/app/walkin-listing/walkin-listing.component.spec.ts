import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkinListingComponent } from './walkin-listing.component';

describe('WalkinListingComponent', () => {
  let component: WalkinListingComponent;
  let fixture: ComponentFixture<WalkinListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WalkinListingComponent]
    });
    fixture = TestBed.createComponent(WalkinListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
