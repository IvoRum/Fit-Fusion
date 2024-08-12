import { NgModule } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogTitle } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    NgFor,
    MatGridListModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDialogModule,
  ],
  exports: [
    MatCardModule,
    MatIconModule,
    MatIconModule,
    FlexLayoutModule,
    NgFor,
    MatGridListModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDialogModule,
  ],
})
export class MatarialModule {}
