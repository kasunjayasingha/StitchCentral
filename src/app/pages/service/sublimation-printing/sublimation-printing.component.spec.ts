import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SublimationPrintingComponent } from './sublimation-printing.component';

describe('SublimationPrintingComponent', () => {
  let component: SublimationPrintingComponent;
  let fixture: ComponentFixture<SublimationPrintingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SublimationPrintingComponent]
    });
    fixture = TestBed.createComponent(SublimationPrintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
