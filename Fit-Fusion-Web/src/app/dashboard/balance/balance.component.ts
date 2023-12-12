import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Balance } from 'src/model/Balance';
import { WorkerServiceService } from 'src/service/worker-service.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css'],
})
export class BalanceComponent implements OnInit {
  balance!: Balance[];
  dataSource = new MatTableDataSource<Balance>();
  displayedBalanceColumns: string[] = ['Date', 'Net Income', 'Conclusion'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private workerService: WorkerServiceService) {}

  ngOnInit(): void {
    this.workerService.fetchBalance().subscribe((data) => {
      this.balance = data;
      this.dataSource = new MatTableDataSource<Balance>(this.balance);
    });
  }
}
