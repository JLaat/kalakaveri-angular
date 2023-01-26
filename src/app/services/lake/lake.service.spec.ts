import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from '../../../environments/environment.development';
import { LakeService } from './lake.service';

describe('LakeService', () => {
  let httpMock: HttpTestingController;
  let testService: LakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LakeService],
    });
    testService = TestBed.inject(LakeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('getAllLakes() should return an Observable<Lake[]>', () => {
    const lakes = [
      { id: 1, name: 'Lake 1', location: 'Location 1' },
      { id: 2, name: 'Lake 2', location: 'Location 2' },
    ];

    testService.getAllLakes().subscribe((res) => {
      expect(res).toEqual(lakes);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/lake/all`);
    expect(req.request.method).toBe('GET');
    req.flush(lakes);

    httpMock.verify();
  });
});
