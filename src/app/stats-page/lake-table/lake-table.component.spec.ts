import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { LakeTableComponent } from './lake-table.component';
import { MatTableModule } from '@angular/material/table';

describe('LakeTableComponent', () => {
  let component: LakeTableComponent;
  let fixture: ComponentFixture<LakeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LakeTableComponent],
      imports: [HttpClientTestingModule, MatTableModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LakeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have a 'lakeData' property", () => {
    expect(component.lakeData).toBeTruthy();
  });
});
