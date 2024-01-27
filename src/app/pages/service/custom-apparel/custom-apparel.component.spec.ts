import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomApparelComponent } from './custom-apparel.component';

describe('CustomApparelComponent', () => {
  let component: CustomApparelComponent;
  let fixture: ComponentFixture<CustomApparelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomApparelComponent]
    });
    fixture = TestBed.createComponent(CustomApparelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
