import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Fish } from '../../models/fish.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({ providedIn: 'root' })
export class FishService {
  private apiUrl: string = environment.apiUrl || 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  public getAllFishes(): Observable<Fish[]> {
    return this.http.get<Fish[]>(`${this.apiUrl}/fish/all`);
  }

  public getFishById(id: number): Observable<Fish> {
    return this.http.get<Fish>(`${this.apiUrl}/fish/find/${id}`);
  }

  public addFish(fish: Fish): Observable<Fish> {
    return this.http.post<Fish>(`${this.apiUrl}/fish/add`, fish);
  }

  public updateFish(fish: Fish): Observable<Fish> {
    return this.http.put<Fish>(`${this.apiUrl}/fish/update`, fish);
  }

  public deleteFish(id: number): Observable<Fish> {
    return this.http.delete<Fish>(`${this.apiUrl}/fish/delete/${id}`);
  }
}
