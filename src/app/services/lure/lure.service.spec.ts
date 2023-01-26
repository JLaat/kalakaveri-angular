import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from '../../../environments/environment.development';
import { LureService } from './lure.service';
import { Lure } from '../../models/lure.model';

describe('LureService', () => {
  let httpMock: HttpTestingController;
  let testService: LureService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LureService],
    });
    testService = TestBed.inject(LureService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('getAllLures() should return an Observable<Lure[]>', () => {
    const lures: Lure[] = [
      { id: 1, brand: 'Rapala', model: 'X-Rap', color: 'Red', weight: 0.5 },
      { id: 2, brand: 'Rapala', model: 'X-Rap', color: 'Blue', weight: 0.5 },
    ];

    testService.getAllLures().subscribe((res) => {
      expect(res).toEqual(lures);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/lure/all`);
    expect(req.request.method).toBe('GET');
    req.flush(lures);

    httpMock.verify();
  });
});
