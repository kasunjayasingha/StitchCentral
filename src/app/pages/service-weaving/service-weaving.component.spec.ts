import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceWeavingComponent } from './service-weaving.component';

describe('ServiceWeavingComponent', () => {
  let component: ServiceWeavingComponent;
  let fixture: ComponentFixture<ServiceWeavingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceWeavingComponent]
    });
    fixture = TestBed.createComponent(ServiceWeavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
