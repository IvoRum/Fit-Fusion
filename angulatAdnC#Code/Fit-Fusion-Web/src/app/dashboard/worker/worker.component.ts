import { Component, OnInit } from '@angular/core';
import { Worler } from 'src/model/Worker';
import { WorkerServiceService } from 'src/service/worker-service.service';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css'],
})
export class WorkerComponent implements OnInit {
  displayedColumns1: string[] = ['First Name', 'Last Name', 'Salary', 'Title'];
  worker!: Worler[];

  constructor(private workerService: WorkerServiceService) {}

  ngOnInit(): void {
    this.workerService.fetchWorkers().subscribe((data) => {
      this.worker = data;
    });
  }
}
