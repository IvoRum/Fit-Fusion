import { Component } from '@angular/core';
import { Trainer } from '../dto/Trainer';
import { Client } from '../dto/Client';

@Component({
  selector: 'app-triners-fitness',
  templateUrl: './triners-fitness.component.html',
  styleUrls: ['./triners-fitness.component.css'],
})
export class TrinersFitnessComponent {
  trenerList: Trainer[] = [
    {
      name: 'Ivanka',
      score: 3,
      clients: [
        {
          name: 'ceco',
          email: 'cece@abv.bg',
          course: null,
        },
      ],
      img: 'assets\\img\\trener1.png',
    },
    {
      name: 'Ivan',
      score: 3,
      clients: [
        {
          name: 'ceco',
          email: 'cece@abv.bg',
          course: null,
        },
      ],
      img: 'assets\\img\\trener2.png',
    },
    {
      name: 'Moneta',
      score: 3,
      clients: [
        {
          name: 'ceco',
          email: 'cece@abv.bg',
          course: null,
        },
      ],
      img: 'assets\\img\\trener3.png',
    },
    {
      name: 'Cvetelina',
      score: 3,
      clients: [
        {
          name: 'ceco',
          email: 'cece@abv.bg',
          course: null,
        },
      ],
      img: 'assets\\img\\trener4.png',
    },
    {
      name: 'Manolo',
      score: 3,
      clients: [
        {
          name: 'ceco',
          email: 'cece@abv.bg',
          course: null,
        },
      ],
      img: 'assets\\img\\trener5.png',
    },
  ];
}
