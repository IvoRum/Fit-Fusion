import { Component } from '@angular/core';
import { Course } from '../dto/Course';

@Component({
  selector: 'app-programs-fitness',
  templateUrl: './programs-fitness.component.html',
  styleUrls: ['./programs-fitness.component.css'],
})
export class ProgramsFitnessComponent {
  corses: Course[] = [
    {
      name: '🧘 Standard Yoga',
      proficiency: 1,
      exercises: [
        {
          exercise: {
            name: 'Warm up day',
            description: 'A day to get the week a good start',
            ing: 'assets\\img\\plan2.jpg',
            score: 1,
          },
          weekDay: 'Sunday',
        },
      ],
    },
    {
      name: '5 Day Womans Workout Routine',
      proficiency: 1,
      exercises: [
        {
          exercise: {
            name: 'Warm up day',
            description: 'A day to get the week a good start',
            ing: 'assets\\img\\plan3.jpg',
            score: 1,
          },
          weekDay: 'Sunday',
        },
      ],
    },
    {
      name: `Men's Gymnastics`,
      proficiency: 1,
      exercises: [
        {
          exercise: {
            name: 'Warm up day',
            description: 'A day to get the week a good start',
            ing: 'assets\\img\\plan4.jpg',
            score: 1,
          },
          weekDay: 'Sunday',
        },
      ],
    },
    {
      name: `Men's Crossfit`,
      proficiency: 1,
      exercises: [
        {
          exercise: {
            name: 'Warm up day',
            description: 'A day to get the week a good start',
            ing: 'assets\\img\\plan5.jpg',
            score: 1,
          },
          weekDay: 'Sunday',
        },
      ],
    },
  ];
}
