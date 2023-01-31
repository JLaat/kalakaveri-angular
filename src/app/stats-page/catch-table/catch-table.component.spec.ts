import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CatchTableComponent } from './catch-table.component';

describe('CatchTableComponent', () => {
  let component: CatchTableComponent;
  let fixture: ComponentFixture<CatchTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatchTableComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CatchTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
