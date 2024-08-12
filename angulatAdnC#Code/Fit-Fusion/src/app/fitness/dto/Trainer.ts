import { Client } from './Client';

export interface Trainer {
  name: string;
  score: number;
  clients: Client[];
  img: string;
}
