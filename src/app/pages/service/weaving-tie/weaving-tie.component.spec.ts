import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeavingTieComponent } from './weaving-tie.component';

describe('WeavingTieComponent', () => {
  let component: WeavingTieComponent;
  let fixture: ComponentFixture<WeavingTieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeavingTieComponent]
    });
    fixture = TestBed.createComponent(WeavingTieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
