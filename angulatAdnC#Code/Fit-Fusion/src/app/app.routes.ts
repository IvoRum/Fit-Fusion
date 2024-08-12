import { Routes } from '@angular/router';
import { FitfusionComponent } from './landing/fitfusion/fitfusion.component';
import { ProgramsFitnessComponent } from './fitness/programs-fitness/programs-fitness.component';
import { TrinersFitnessComponent } from './fitness/triners-fitness/triners-fitness.component';

export const routes: Routes = [
  {
    path: '',
    component: FitfusionComponent,
  },
  {
    path: 'fitfusion/demo',
    loadChildren: () =>
      import('./fitness/fitness.module').then((m) => m.FitnessModule),
  },
  {
    path: 'fitfusion/demo/programs',
    component: ProgramsFitnessComponent,
  },
  {
    path: 'fitfusion/demo/trainers',
    component: TrinersFitnessComponent,
  },
  {
    path: 'fitfusion',
    component: FitfusionComponent,
  },
  { path: '**', redirectTo: '' },
];
