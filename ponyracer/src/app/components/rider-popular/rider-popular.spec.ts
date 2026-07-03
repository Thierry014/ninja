import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderPopular } from './rider-popular';

describe('RiderPopular', () => {
  let component: RiderPopular;
  let fixture: ComponentFixture<RiderPopular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiderPopular],
    }).compileComponents();

    fixture = TestBed.createComponent(RiderPopular);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
