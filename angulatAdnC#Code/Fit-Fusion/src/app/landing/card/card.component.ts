import { Component, Input } from '@angular/core';
import { PorjectCard } from '../domain/ProjectCard';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input('card') cardDate!: PorjectCard;
  @Input() action!: any;
}
