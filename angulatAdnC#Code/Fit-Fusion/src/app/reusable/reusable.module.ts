import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatarialModule } from '../matarial/matarial.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatarialModule],
  exports: [HeaderComponent],
})
export class ReusableModule {}
