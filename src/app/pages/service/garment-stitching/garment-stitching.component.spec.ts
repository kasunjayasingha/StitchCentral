import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarmentStitchingComponent } from './garment-stitching.component';

describe('GarmentStitchingComponent', () => {
  let component: GarmentStitchingComponent;
  let fixture: ComponentFixture<GarmentStitchingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GarmentStitchingComponent]
    });
    fixture = TestBed.createComponent(GarmentStitchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
