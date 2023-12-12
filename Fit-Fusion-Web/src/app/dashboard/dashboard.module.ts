import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MaterialModule } from 'src/material/material.module';
import { WorkerComponent } from './worker/worker.component';
import { BalanceComponent } from './balance/balance.component';

@NgModule({
  declarations: [MainComponent, WorkerComponent, BalanceComponent],
  imports: [CommonModule, MaterialModule],
  exports: [MainComponent],
})
export class DashboardModule {}
