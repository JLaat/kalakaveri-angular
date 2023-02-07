import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishCountComponent } from './fish-count.component';

describe('FishCountComponent', () => {
  let component: FishCountComponent;
  let fixture: ComponentFixture<FishCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FishCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
