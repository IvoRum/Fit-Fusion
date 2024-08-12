import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainFitnessComponent } from './main-fitness/main-fitness.component';
import { ProgramsFitnessComponent } from './programs-fitness/programs-fitness.component';
import { TrinersFitnessComponent } from './triners-fitness/triners-fitness.component';

const routes: Routes = [
  {
    path: '',
    component: MainFitnessComponent,
  },
  {
    path: 'programs',
    component: ProgramsFitnessComponent,
  },
  {
    path: 'trainers',
    component: TrinersFitnessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FitnessRoutingModule {}
