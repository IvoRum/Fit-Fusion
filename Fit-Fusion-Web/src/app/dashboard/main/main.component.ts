import { Component, OnInit } from '@angular/core';
import { WorkerServiceService } from 'src/service/worker-service.service';
import { Worler } from 'src/model/Worker';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  worker!: Worler[];
  displayedColumns1: string[] = ['First Name', 'Last Name', 'Slary', 'Title'];

  constructor(private workerService: WorkerServiceService) {}

  ngOnInit(): void {
    this.workerService.fetchWorkers().subscribe((data) => {
      this.worker = data;
    });
  }
}
