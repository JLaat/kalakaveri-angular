import { Component, OnInit } from '@angular/core';
import { CatchService } from 'src/app/services/catch/catch.service';

@Component({
  selector: 'app-fish-count',
  templateUrl: './fish-count.component.html',
  styleUrls: ['./fish-count.component.scss'],
})
export class FishCountComponent implements OnInit {
  private catchService: CatchService;
  public countData: { name: string; count: number }[] = [];
  public displayedColumns: string[] = ['name', 'count'];

  constructor(catchService: CatchService) {
    this.catchService = catchService;
  }

  ngOnInit(): void {
    this.getCounts();
  }

  public getCounts(): void {
    this.catchService.getFishCounts().subscribe((counts) => {
      this.countData = counts;
      console.log(this.countData);
    });
  }
}
