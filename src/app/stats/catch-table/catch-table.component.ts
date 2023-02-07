import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Catch } from 'src/app/models/catch.model';
import { CatchService } from 'src/app/services/catch/catch.service';
import { FishService } from 'src/app/services/fish/fish.service';
import { LakeService } from 'src/app/services/lake/lake.service';
import { LureService } from 'src/app/services/lure/lure.service';

@Component({
  selector: 'app-catch-table',
  templateUrl: './catch-table.component.html',
  styleUrls: ['./catch-table.component.scss'],
})
export class CatchTableComponent implements OnInit {
  public catchData: Catch[] = [];
  public topTenCatches: Catch[] = [];

  displayedColumns: string[] = [
    'fish-name',
    'lake-name',
    'lure-model',
    'weight',
  ];

  constructor(
    private catchService: CatchService,
    private fishService: FishService,
    private lakeService: LakeService,
    private lureService: LureService
  ) {}

  ngOnInit(): void {
    this.getCatches();
    this.getTopCatches();
    console.log(this.catchData);
  }

  public getCatches(): void {
    this.catchService.getCatches().subscribe((catches) => {
      this.catchData = catches;
    });
  }

  public getTopCatches(): void {
    this.catchService.getTopCatches().subscribe((catches) => {
      this.topTenCatches = catches;
    });
  }
}
