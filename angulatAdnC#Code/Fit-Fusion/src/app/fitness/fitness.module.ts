import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFitnessComponent } from './main-fitness/main-fitness.component';
import { FitnessRoutingModule } from './fitness-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatarialModule } from '../matarial/matarial.module';
import { ProgramsFitnessComponent } from './programs-fitness/programs-fitness.component';
import { TrinersFitnessComponent } from './triners-fitness/triners-fitness.component';

@NgModule({
  declarations: [
    MainFitnessComponent,
    ProgramsFitnessComponent,
    TrinersFitnessComponent,
  ],
  imports: [
    CommonModule,
    MatarialModule,
    FitnessRoutingModule,
    ReactiveFormsModule,
  ],
})
export class FitnessModule {}
