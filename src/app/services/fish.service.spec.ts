import { getTestBed, TestBed } from '@angular/core/testing';
import { Fish } from '../models/fish.model';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { FishService } from './fish.service';
import { environment } from '../../environments/environment.development';

describe('FishService', () => {
  let injector: TestBed;
  let service: FishService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FishService],
    });
    injector = getTestBed();
    service = injector.get(FishService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<Fish[]>', async () => {
    const dummyFishes: Fish[] = [
      {
        id: 5,
        name: 'made',
        weight: 0.4,
      },
    ];

    service.getAllFishes().subscribe((fishes) => {
      expect(fishes.length).toBe(1);
      expect(fishes[1].name).toEqual(dummyFishes[0].name);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/fish/all`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyFishes);
  });
});
