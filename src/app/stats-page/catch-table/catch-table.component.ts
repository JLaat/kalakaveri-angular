import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
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
  public catchData: Catch[] = [];
  displayedColumns: string[] = ['name', 'location'];

  constructor(
    private catchService: CatchService,
    private fishService: FishService,
    private lakeService: LakeService,
    private lureService: LureService
  ) {}

  ngOnInit(): void {
    this.getCatches();
    console.log(this.catchData);
  }

  public getCatches(): void {
    this.catchService.getCatches().subscribe((catches) => {
      this.catchData = catches;
    });
  }
}
