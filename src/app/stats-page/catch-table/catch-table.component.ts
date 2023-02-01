import { Component, OnInit } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { Catch } from 'src/app/models/catch.model';
import { CatchService } from 'src/app/services/catch/catch.service';
import { FishService } from 'src/app/services/fish/fish.service';
import { LakeService } from 'src/app/services/lake/lake.service';
import { LureService } from 'src/app/services/lure/lure.service';
import { Fish } from 'src/app/models/fish.model';
import { Lake } from 'src/app/models/lake.model';
import { Lure } from 'src/app/models/lure.model';

@Component({
  selector: 'app-catch-table',
  templateUrl: './catch-table.component.html',
  styleUrls: ['./catch-table.component.scss'],
})
export class CatchTableComponent implements OnInit {
  public catchData: any[] = [];
  displayedColumns: string[] = ['name', 'location'];

  public fishData: string[] = [];
  public lakeData: string[] = [];
  public lureData: string[] = [];
  public weightData: number[] = [];
  constructor(
    private catchService: CatchService,
    private fishService: FishService,
    private lakeService: LakeService,
    private lureService: LureService
  ) {}

  ngOnInit(): void {
    this.getCatches();
    this.getCatches();
  }

  public getCatches(): void {
    this.catchService.getAllCatches().subscribe({
      next: (response: any) => {
        response.map(
          (catchItem: {
            id: number;
            fishId: number;
            lakeId: number;
            lureId: number;
            weight: number;
          }) => {
            let fishName;
            let lakeName;
            let lureName;

            this.fishService
              .getFishById(catchItem.fishId)
              .pipe(map((fish) => fish.name))
              .subscribe((result) => this.fishData.push(result));
            this.lakeService
              .getLakeById(catchItem.lakeId)
              .pipe(map((lake) => lake.name))
              .subscribe((result) => this.lakeData.push(result));
            this.lureService
              .getLureById(catchItem.lureId)
              .pipe(map((lure) => lure.model))
              .subscribe((result) => this.lureData.push(result));

            this.weightData.push(catchItem.weight);
            return {
              id: catchItem.id as number,
              fish: fishName,
              lake: lakeName,
              lure: lureName,
              weight: catchItem.weight,
            };
          }
        );
        for (let i = 0; i < this.fishData.length; i++) {
          this.catchData.push({
            fish: this.fishData[i],
            lake: this.lakeData[i],
            lure: this.lureData[i],
            weight: this.weightData[i],
          });
        }
        console.log(this.catchData);
      },
    });

    console.log(this.catchData);
  }
}
