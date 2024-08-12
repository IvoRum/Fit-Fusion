import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFitnessComponent } from './main-fitness.component';

describe('MainFitnessComponent', () => {
  let component: MainFitnessComponent;
  let fixture: ComponentFixture<MainFitnessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainFitnessComponent]
    });
    fixture = TestBed.createComponent(MainFitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
