import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CatchService } from './catch.service';

describe('CatchService', () => {
  let service: CatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
