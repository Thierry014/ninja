import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRaceForm } from './add-race-form';

describe('AddRaceForm', () => {
  let component: AddRaceForm;
  let fixture: ComponentFixture<AddRaceForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRaceForm],
    }).compileComponents();

    fixture = TestBed.createComponent(AddRaceForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
