import { Observable } from 'rxjs';
import { Fish } from './fish.model';
import { Lake } from './lake.model';
import { Lure } from './lure.model';
export interface ParsedCatch {
  id: number;
  fishId: number;
  lakeId: number;
  lureId: number;
  weight: number;
}
