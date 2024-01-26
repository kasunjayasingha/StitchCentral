import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricPrintingComponent } from './fabric-printing.component';

describe('FabricPrintingComponent', () => {
  let component: FabricPrintingComponent;
  let fixture: ComponentFixture<FabricPrintingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FabricPrintingComponent]
    });
    fixture = TestBed.createComponent(FabricPrintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
