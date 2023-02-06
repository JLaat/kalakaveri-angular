import { Component, OnInit } from '@angular/core';
import { Catch } from 'src/app/models/catch.model';
import { CatchService } from 'src/app/services/catch/catch.service';
import { MatSelect } from '@angular/material/select';
import { FishService } from 'src/app/services/fish/fish.service';
import { Fish } from 'src/app/models/fish.model';
import { Lure } from 'src/app/models/lure.model';
import { Lake } from 'src/app/models/lake.model';
import { LakeService } from 'src/app/services/lake/lake.service';
import { LureService } from 'src/app/services/lure/lure.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-catch-form',
  templateUrl: './catch-form.component.html',
  styleUrls: ['./catch-form.component.scss'],
})
export class CatchFormComponent implements OnInit {
  public fishData: Fish[] = [];
  public lureData: Lure[] = [];
  public lakeData: Lake[] = [];

  public selectedFish!: Fish;
  public selectedLure!: Lure;
  public selectedLake!: Lake;
  public selectedWeight!: number;

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}kg`;
  }

  constructor(
    private fishService: FishService,
    private lakeService: LakeService,
    private lureService: LureService,
    private catchService: CatchService
  ) {}

  ngOnInit(): void {
    this.getFishes();
    this.getLures();
    this.getLakes();
  }

  public getFishes(): void {
    this.fishService.getAllFishes().subscribe((fishes) => {
      this.fishData = fishes;
    });
  }

  public getLures(): void {
    this.lureService.getAllLures().subscribe((lures) => {
      this.lureData = lures;
    });
  }

  public getLakes(): void {
    this.lakeService.getAllLakes().subscribe((lakes) => {
      this.lakeData = lakes;
    });
  }

  public handleAddClick(): void {
    if (this.ensureValuesAreDefined()) {
      const newCatch: any = {
        fishId: this.selectedFish.id,
        lureId: this.selectedLure.id,
        lakeId: this.selectedLake.id,
        weight: this.selectedWeight,
      };
      this.catchService.addCatch(newCatch).subscribe(() => {
        console.log(newCatch);
      });
      console.log(newCatch);
    } else {
      console.log('Please select all values');
    }
  }

  public ensureValuesAreDefined(): boolean {
    return (
      this.selectedFish !== undefined &&
      this.selectedLure !== undefined &&
      this.selectedLake !== undefined &&
      this.selectedWeight !== undefined
    );
  }
}
