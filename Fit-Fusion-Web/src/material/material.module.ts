import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatTableModule, FlexLayoutModule, MatPaginatorModule],
  exports: [MatTableModule, FlexLayoutModule, MatPaginatorModule],
})
export class MaterialModule {}
