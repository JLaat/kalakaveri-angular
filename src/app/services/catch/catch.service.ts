import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Catch } from '../../models/catch.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CatchService {
  private apiUrl: string = environment.apiUrl || 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  public getAllCatches(): Observable<Catch[]> {
    return this.http.get<Catch[]>(`${this.apiUrl}/catch/all`);
  }

  public getCatchById(id: number): Observable<Catch> {
    return this.http.get<Catch>(`${this.apiUrl}/catch/find/${id}`);
  }

  public addCatch(newCatch: Catch): Observable<Catch> {
    return this.http.post<Catch>(`${this.apiUrl}/catch/add`, newCatch);
  }

  public updateCatch(updatedCatch: Catch): Observable<Catch> {
    return this.http.put<Catch>(`${this.apiUrl}/catch/update`, updatedCatch);
  }

  public deleteCatch(id: number): Observable<Catch> {
    return this.http.delete<Catch>(`${this.apiUrl}/catch/delete/${id}`);
  }
}
