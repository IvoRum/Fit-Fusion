import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fitfusion',
  templateUrl: './fitfusion.component.html',
  styleUrls: ['./fitfusion.component.css'],
})
export class FitfusionComponent {
  constructor(public dialog: MatDialog, private router: Router) {}

  images: string[] = [
    'assets\\img\\FitFusion\\main.png',
    'assets\\img\\FitFusion\\relations.png',
  ];

  currentIndex: number = 0;

  showNext() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  showPrev() {
    this.currentIndex =
      (this.currentIndex + this.images.length - 1) % this.images.length;
  }
  openTicketFlowDialog() {
    this.router.navigate(['/fitfusion/demo']);
    //const dialogRef = this.dialog.open(FitfusionComponent);
    //dialogRef.afterClosed();
  }
}
