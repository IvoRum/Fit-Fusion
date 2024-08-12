import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    FlexLayoutModule,
    MatPaginatorModule,
    NgChartsModule,
  ],
  exports: [
    MatTableModule,
    FlexLayoutModule,
    MatPaginatorModule,
    NgChartsModule,
  ],
})
export class MaterialModule {}
