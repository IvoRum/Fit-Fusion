import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FitfusionComponent } from './landing/fitfusion/fitfusion.component';
import { ProgramsFitnessComponent } from './fitness/programs-fitness/programs-fitness.component';
import { TrinersFitnessComponent } from './fitness/triners-fitness/triners-fitness.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'fitfusion/demo',
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
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
