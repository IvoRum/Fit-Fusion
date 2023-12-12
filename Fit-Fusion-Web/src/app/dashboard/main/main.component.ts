import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { WorkerServiceService } from 'src/service/worker-service.service';
import { Worler } from 'src/model/Worker';
import { Balance } from 'src/model/Balance';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit, AfterViewInit {
  worker!: Worler[];
  balance!: Balance[];
  displayedColumns1: string[] = ['First Name', 'Last Name', 'Slary', 'Title'];
  displayedBalanceColumns: string[] = ['Date', 'Net Income', 'Conclusion'];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource: any;

  constructor(private workerService: WorkerServiceService) {}

  ngOnInit(): void {
    this.workerService.fetchWorkers().subscribe((data) => {
      this.worker = data;
    });
    this.workerService.fetchBalance().subscribe((data) => {
      this.balance = data;
    });
    this.dataSource = new MatTableDataSource<Balance>(this.balance);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
