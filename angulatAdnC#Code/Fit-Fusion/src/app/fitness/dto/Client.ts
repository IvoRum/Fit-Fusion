import { Course } from './Course';

export interface Client {
  name: string;
  email: string;
  course: Course | null;
}
