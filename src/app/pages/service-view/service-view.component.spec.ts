import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceViewComponent } from './service-view.component';

describe('ServiceViewComponent', () => {
  let component: ServiceViewComponent;
  let fixture: ComponentFixture<ServiceViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceViewComponent]
    });
    fixture = TestBed.createComponent(ServiceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
