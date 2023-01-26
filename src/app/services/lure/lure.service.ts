import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lure } from 'src/app/models/lure.model';

@Injectable({
  providedIn: 'root',
})
export class LureService {
  private apiUrl: string = environment.apiUrl || 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  public getAllLures(): Observable<Lure[]> {
    return this.http.get<Lure[]>(`${this.apiUrl}/lure/all`);
  }

  public getLureById(id: number): Observable<Lure> {
    return this.http.get<Lure>(`${this.apiUrl}/lure/${id}`);
  }

  public addLure(lure: Lure): Observable<Lure> {
    return this.http.post<Lure>(`${this.apiUrl}/lure/add`, lure);
  }

  public updateLure(lure: Lure): Observable<Lure> {
    return this.http.put<Lure>(`${this.apiUrl}/lure/update`, lure);
  }

  public deleteLure(id: number): Observable<Lure> {
    return this.http.delete<Lure>(`${this.apiUrl}/lure/delete/${id}`);
  }
}
