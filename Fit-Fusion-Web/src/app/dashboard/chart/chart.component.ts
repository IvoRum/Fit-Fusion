import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';
import { DaylyVisistation } from 'src/model/DaylyVisistation';
import { WorkerServiceService } from 'src/service/worker-service.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  daylyVisistors!: DaylyVisistation[];
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  constructor(private workerService: WorkerServiceService) {}

  ngOnInit(): void {
    this.workerService.fetchDaylyVisitors().subscribe((data) => {
      this.daylyVisistors = data;

      this.subscriptionPrice = this.daylyVisistors.map(
        (item) => item.subscriptionPrice
      );
      this.labels = this.daylyVisistors.map((item) => item.firstName);
      console.log(this.subscriptionPrice);
      console.log(this.labels);
      this.chartData = [{ data: this.subscriptionPrice, label: 'Series A' }];
    });
  }
  chartData!: any[];
  subscriptionPrice: number[] = [23, 32];
  labels: String[] = ['1', '2'];

  public barChartType = 'bar';
  public barChartLegend = true;
}
