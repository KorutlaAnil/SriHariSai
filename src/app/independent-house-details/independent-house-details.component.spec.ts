import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndependentHouseDetailsComponent } from './independent-house-details.component';

describe('IndependentHouseDetailsComponent', () => {
  let component: IndependentHouseDetailsComponent;
  let fixture: ComponentFixture<IndependentHouseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndependentHouseDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndependentHouseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
