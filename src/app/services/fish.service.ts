import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Fish } from '../models/fish.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({ providedIn: 'root' })
export class FishService {
  private apiUrl: string = environment.apiUrl || 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  public getAllFishes(): Observable<Fish[]> {
    return this.http.get<Fish[]>(`${this.apiUrl}/fish/all`);
  }
}
