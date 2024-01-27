import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApparelDesignComponent } from './apparel-design.component';

describe('ApparelDesignComponent', () => {
  let component: ApparelDesignComponent;
  let fixture: ComponentFixture<ApparelDesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApparelDesignComponent]
    });
    fixture = TestBed.createComponent(ApparelDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
