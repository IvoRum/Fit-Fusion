import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';
import { async } from 'rxjs';
import { DaylyVisistation } from 'src/model/DaylyVisistation';
import {
  HalfAYearData,
  HalfAYearDataList,
  MontlyVisitors,
} from 'src/model/HalfAYearData';
import { VisistationsChartData } from 'src/model/VisistationsChartData';
import { WorkerServiceService } from 'src/service/worker-service.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  daylyVisistors!: DaylyVisistation[];
  halfAYearVisitors!: VisistationsChartData[];

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  constructor(private workerService: WorkerServiceService) {}

  async ngOnInit(): Promise<void> {
    this.workerService.fetchDaylyVisitors().subscribe((data) => {
      this.daylyVisistors = data;

      this.subscriptionPrice = this.daylyVisistors.map(
        (item) => item.subscriptionPrice
      );
      this.labels = this.daylyVisistors.map((item) => item.firstName);
      //this.chartData = [{ data: this.subscriptionPrice, label: 'Daly Visits' }];
    });

    this.workerService.fetchDaylyVisitors().subscribe((data) => {
      this.daylyVisistors = data;

      this.subscriptionPrice1 = this.daylyVisistors.map(
        (item) => item.subscriptionPrice
      );
      this.labels = this.daylyVisistors.map((item) => item.firstName);
      //console.log(this.labels);
      this.chartData = [
        { data: this.subscriptionPrice1, label: 'Daly Visits' },
        { data: this.subscriptionPrice, label: 'Mothly Visits' },
      ];
    });
    await this.workerService
      .fetchHalfAYearVistors()
      .subscribe((data: VisistationsChartData[]) => {
        this.halfAYearVisitors = data;
        console.log(this.halfAYearVisitors);
        var finalData: FinalChartDataSetUp[] = [];
        var finalLabels: string[] = [];
        var br = 0;
        let labes: any[] = [
          { label: 'June' },
          { label: 'July' },
          { label: 'August' },
          { label: 'September' },
          { label: 'October' },
          { label: 'November' },
          { label: 'December' },
        ];
        this.halfAYearVisitors.forEach((item) => {
          finalData.push({ data: item.visistations, label: labes[br].label });
          br++;
        });

        this.labels = data[1].visitors;
        var visitors = this.halfAYearVisitors.map((item) => item.visitors);

        console.log(finalData);
        console.log(visitors);
        this.chartData = [finalData];
      });
  }

  visistationsChartData: any[] = [];

  chartData!: any[];
  clientDates: Date[] = [];
  subscriptionPrice1: number[] = [];
  subscriptionPrice: number[] = [23, 32];
  labels: String[] = ['1', '2'];

  public barChartType = 'bar';
  public barChartLegend = true;
}

export interface FinalChartDataSetUp {
  data: any;
  label: any;
}
