import { Component, OnInit } from '@angular/core';
import { WorkerServiceService } from 'src/service/worker-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private workerService: WorkerServiceService) {}

  ngOnInit(): void {}
}
