import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerSalaryComponent } from './worker-salary.component';

describe('WorkerSalaryComponent', () => {
  let component: WorkerSalaryComponent;
  let fixture: ComponentFixture<WorkerSalaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkerSalaryComponent]
    });
    fixture = TestBed.createComponent(WorkerSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
