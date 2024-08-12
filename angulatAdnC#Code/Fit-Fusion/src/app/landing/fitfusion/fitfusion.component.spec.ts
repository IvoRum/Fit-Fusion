import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitfusionComponent } from './fitfusion.component';

describe('FitfusionComponent', () => {
  let component: FitfusionComponent;
  let fixture: ComponentFixture<FitfusionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FitfusionComponent]
    });
    fixture = TestBed.createComponent(FitfusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
