import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { LureTableComponent } from './lure-table.component';
import { MatTableModule } from '@angular/material/table';
import { LureService } from 'src/app/services/lure/lure.service';

describe('LureTableComponent', () => {
  let component: LureTableComponent;
  let fixture: ComponentFixture<LureTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LureTableComponent],
      imports: [HttpClientTestingModule, MatTableModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LureTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set lureData', () => {
    component.ngOnInit();
    expect(component.lureData).toBeTruthy();
  });
});
