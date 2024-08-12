import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaylyVisitationComponent } from './dayly-visitation.component';

describe('DaylyVisitationComponent', () => {
  let component: DaylyVisitationComponent;
  let fixture: ComponentFixture<DaylyVisitationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DaylyVisitationComponent]
    });
    fixture = TestBed.createComponent(DaylyVisitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
