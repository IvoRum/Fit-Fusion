import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsFitnessComponent } from './programs-fitness.component';

describe('ProgramsFitnessComponent', () => {
  let component: ProgramsFitnessComponent;
  let fixture: ComponentFixture<ProgramsFitnessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramsFitnessComponent]
    });
    fixture = TestBed.createComponent(ProgramsFitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
