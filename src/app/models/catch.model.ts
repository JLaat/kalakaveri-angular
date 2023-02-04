import { Observable } from 'rxjs';
import { Fish } from './fish.model';
import { Lake } from './lake.model';
import { Lure } from './lure.model';
export interface Catch {
  id?: number;
  fish: Fish;
  lake: Lake;
  lure: Lure;
  weight: number;
}
