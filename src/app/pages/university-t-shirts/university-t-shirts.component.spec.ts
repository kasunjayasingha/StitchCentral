import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityTShirtsComponent } from './university-t-shirts.component';

describe('UniversityTShirtsComponent', () => {
  let component: UniversityTShirtsComponent;
  let fixture: ComponentFixture<UniversityTShirtsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UniversityTShirtsComponent]
    });
    fixture = TestBed.createComponent(UniversityTShirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
