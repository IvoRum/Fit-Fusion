import { Component, OnInit } from '@angular/core';
import { DaylyVisistation } from 'src/model/DaylyVisistation';
import { WorkerServiceService } from 'src/service/worker-service.service';

@Component({
  selector: 'app-dayly-visitation',
  templateUrl: './dayly-visitation.component.html',
  styleUrls: ['./dayly-visitation.component.css'],
})
export class DaylyVisitationComponent implements OnInit {
  daylyVisistors!: DaylyVisistation[];
  displayedBalanceColumns: string[] = [
    'Name',
    'Family Name',
    'Subsctiption',
    'Subsctiption Price',
  ];
  constructor(private workerService: WorkerServiceService) {}

  ngOnInit(): void {
    this.workerService.fetchDaylyVisitors().subscribe((data) => {
      this.daylyVisistors = data;
    });
  }
}
