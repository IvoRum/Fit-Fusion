import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MaterialModule } from 'src/material/material.module';
import { WorkerComponent } from './worker/worker.component';
import { BalanceComponent } from './balance/balance.component';
import { DaylyVisitationComponent } from './dayly-visitation/dayly-visitation.component';
import { WorkerSalaryComponent } from './worker-salary/worker-salary.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [MainComponent, WorkerComponent, BalanceComponent, DaylyVisitationComponent, WorkerSalaryComponent, ChartComponent],
  imports: [CommonModule, MaterialModule],
  exports: [MainComponent],
})
export class DashboardModule {}
