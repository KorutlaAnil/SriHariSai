import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmemtDetailsComponent } from './apartmemt-details.component';

describe('ApartmemtDetailsComponent', () => {
  let component: ApartmemtDetailsComponent;
  let fixture: ComponentFixture<ApartmemtDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartmemtDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmemtDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
