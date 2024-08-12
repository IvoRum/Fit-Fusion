import { ExerciseDayPair } from './ExerciseDayPair';

export interface Course {
  name: string;
  proficiency: number;
  exercises: ExerciseDayPair[];
}
