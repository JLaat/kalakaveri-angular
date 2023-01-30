import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LureTableComponent } from './lure-table.component';

describe('LureTableComponent', () => {
  let component: LureTableComponent;
  let fixture: ComponentFixture<LureTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LureTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LureTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have lures in the array', () => {
    expect(component.lureData.length).toBeGreaterThan(0);
  });
});
