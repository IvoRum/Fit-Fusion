import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';
import { async } from 'rxjs';
import { DaylyVisistation } from 'src/model/DaylyVisistation';
import {
  HalfAYearData,
  HalfAYearDataList,
  MontlyVisitors,
} from 'src/model/HalfAYearData';
import { WorkerServiceService } from 'src/service/worker-service.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  daylyVisistors!: DaylyVisistation[];
  halfAYearVisitors!: HalfAYearData;

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
    async await this.workerService
      .fetchHalfAYearVistors()
      .subscribe((data: HalfAYearData) => {
        this.halfAYearVisitors = data;

        console.log(this.halfAYearVisitors);
      });
  }
  clientsData: VisistationtData[] = [];
  setUpChartData(): any {
    let clientsData: VisistationtData[] = [];
    let labes: any[] = [
      { label: 'June' },
      { label: 'July' },
      { label: 'August' },
      { label: 'September' },
      { label: 'October' },
      { label: 'November' },
      { label: 'December' },
    ];
    this.halfAYearVisitors.allClientsForHalfAyear.forEach(
      (moth: HalfAYearDataList) => {
        moth.listOfClients.forEach((client) => {
          clientsData.push({
            name: client.firstName,
            visistations: client.count,
          });
        });
      }
    );
    console.log(clientsData);

    return clientsData;
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

export interface VisistationChartData {
  data: string;
  label: string;
}

export interface VisistationtData {
  name: string;
  visistations: number;
}
