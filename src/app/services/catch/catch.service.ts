import { Injectable, OnInit } from '@angular/core';
import { forkJoin, map, mergeMap, Observable, tap, of } from 'rxjs';
import { Catch } from '../../models/catch.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Fish } from 'src/app/models/fish.model';
import { Lake } from 'src/app/models/lake.model';
import { Lure } from 'src/app/models/lure.model';

@Injectable({
  providedIn: 'root',
})
export class CatchService {
  private apiUrl: string = environment.apiUrl || 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getCatches(): Observable<Catch[]> {
    return this.http
      .get<
        {
          id: number;
          fishId: number;
          lakeId: number;
          lureId: number;
          weight: number;
        }[]
      >(`${this.apiUrl}/catch/all`) // Get all catches as an array of objects:  array[]:{id, fishId, lakeId, lureId, weight}
      .pipe(
        mergeMap((catchesData) => {
          // For each catch, get the fish, lake, and lure data by using the id's from the catch object
          return forkJoin(
            catchesData.map((catchData) => {
              // forkJoin() is used to wait for all the http requests to complete before returning the data
              return forkJoin({
                id: of(catchData.id),
                fish: this.http.get<Fish>(
                  `${this.apiUrl}/fish/find/${catchData.fishId}`
                ),
                lake: this.http.get<Lake>(
                  `${this.apiUrl}/lake/find/${catchData.lakeId}`
                ),
                lure: this.http.get<Lure>(
                  `${this.apiUrl}/lure/find/${catchData.lureId}`
                ),
                weight: of(catchData.weight),
              });
            })
          );
        })
      );
  }

  getTopCatches(): Observable<Catch[]> {
    return this.http
      .get<
        {
          id: number;
          fishId: number;
          lakeId: number;
          lureId: number;
          weight: number;
        }[]
      >(`${this.apiUrl}/catch/top`) // Get all catches as an array of objects:  array[]:{id, fishId, lakeId, lureId, weight}
      .pipe(
        mergeMap((catchesData) => {
          // For each catch, get the fish, lake, and lure data by using the id's from the catch object
          return forkJoin(
            catchesData.map((catchData) => {
              // forkJoin() is used to wait for all the http requests to complete before returning the data
              return forkJoin({
                id: of(catchData.id),
                fish: this.http.get<Fish>(
                  `${this.apiUrl}/fish/find/${catchData.fishId}`
                ),
                lake: this.http.get<Lake>(
                  `${this.apiUrl}/lake/find/${catchData.lakeId}`
                ),
                lure: this.http.get<Lure>(
                  `${this.apiUrl}/lure/find/${catchData.lureId}`
                ),
                weight: of(catchData.weight),
              });
            })
          );
        })
      );
  }

  public getCatchById(id: number): Observable<Catch> {
    return this.http.get<Catch>(`${this.apiUrl}/catch/find/${id}`);
  }

  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  };

  public addCatch(newCatch: any): Observable<Catch> {
    return this.http.post<any>(
      `${this.apiUrl}/catch/add`,
      newCatch,
      this.options
    );
  }

  public updateCatch(updatedCatch: Catch): Observable<Catch> {
    return this.http.put<Catch>(`${this.apiUrl}/catch/update`, updatedCatch);
  }

  public deleteCatch(id: number): Observable<Catch> {
    return this.http.delete<Catch>(`${this.apiUrl}/catch/delete/${id}`);
  }
}
