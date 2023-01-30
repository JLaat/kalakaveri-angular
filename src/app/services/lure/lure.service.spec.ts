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
    expect(testService.getAllLures()).toBeTruthy();
  });
});
