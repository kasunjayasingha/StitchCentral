import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesFabricComponent } from './services-fabric.component';

describe('ServicesFabricComponent', () => {
  let component: ServicesFabricComponent;
  let fixture: ComponentFixture<ServicesFabricComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesFabricComponent]
    });
    fixture = TestBed.createComponent(ServicesFabricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
