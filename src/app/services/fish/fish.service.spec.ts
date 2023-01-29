import { getTestBed, TestBed } from '@angular/core/testing';
import { Fish } from '../../models/fish.model';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { FishService } from './fish.service';
import { environment } from '../../../environments/environment.development';

describe('FishService', () => {
  let httpMock: HttpTestingController;
  let testService: FishService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FishService],
    });
    testService = TestBed.inject(FishService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('getAllFishes() should return an Observable<Fish[]>', () => {
    const fishes: Fish[] = [
      { id: 2, name: 'Ahven' },
      { id: 3, name: 'Kuha' },
    ];

    testService.getAllFishes().subscribe((res) => {
      expect(res).toEqual(fishes);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/fish/all`);
    expect(req.request.method).toBe('GET');
    req.flush(fishes);

    httpMock.verify();
  });
});
