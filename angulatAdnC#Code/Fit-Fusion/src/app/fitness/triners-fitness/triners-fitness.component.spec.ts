import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrinersFitnessComponent } from './triners-fitness.component';

describe('TrinersFitnessComponent', () => {
  let component: TrinersFitnessComponent;
  let fixture: ComponentFixture<TrinersFitnessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrinersFitnessComponent]
    });
    fixture = TestBed.createComponent(TrinersFitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
