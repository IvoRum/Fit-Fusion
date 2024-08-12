import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { CardComponent } from './card/card.component';
import { MatarialModule } from '../material/matarial/matarial.module';
import { LandingRoutingModule } from './landing-routing.module';
import { ReusableModule } from '../reusable/reusable.module';
import { TicketflowComponent } from './ticketflow/ticketflow.component';
import { FitfusionComponent } from './fitfusion/fitfusion.component';

@NgModule({
  declarations: [
    MainComponent,
    CardComponent,
    TicketflowComponent,
    FitfusionComponent,
  ],
  imports: [CommonModule, MatarialModule, LandingRoutingModule, ReusableModule],
  exports: [TicketflowComponent, FitfusionComponent],
})
export class LandingModule {}
