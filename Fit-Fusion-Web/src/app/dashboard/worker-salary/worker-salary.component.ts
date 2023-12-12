import { Component, OnInit } from '@angular/core';
import { Worler } from 'src/model/Worker';
import { WorkerServiceService } from 'src/service/worker-service.service';

@Component({
  selector: 'app-worker-salary',
  templateUrl: './worker-salary.component.html',
  styleUrls: ['./worker-salary.component.css'],
})
export class WorkerSalaryComponent implements OnInit {
  worlers!: Worler;

  constructor(private workerService: WorkerServiceService) {}

  ngOnInit(): void {
    this.workerService.fetchHiestPayroll().subscribe((data) => {
      this.worlers = data;
    });
  }
}
