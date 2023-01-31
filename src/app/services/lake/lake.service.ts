import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lake } from 'src/app/models/lake.model';

@Injectable({
  providedIn: 'root',
})
export class LakeService {
  constructor(private http: HttpClient) {}

  public getAllLakes(): Observable<Lake[]> {
    return this.http.get<Lake[]>(`${environment.apiUrl}/lake/all`);
  }

  public getLakeById(id: number): Observable<Lake> {
    return this.http.get<Lake>(`${environment.apiUrl}/lake/find/${id}`);
  }

  public addLake(lake: Lake): Observable<Lake> {
    return this.http.post<Lake>(`${environment.apiUrl}/lake/add`, lake);
  }

  public updateLake(lake: Lake): Observable<Lake> {
    return this.http.put<Lake>(`${environment.apiUrl}/lake/update`, lake);
  }

  public deleteLake(id: number): Observable<Lake> {
    return this.http.delete<Lake>(`${environment.apiUrl}/lake/delete/${id}`);
  }
}
