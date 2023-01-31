import { Component, OnInit } from '@angular/core';
import { Lake } from 'src/app/models/lake.model';
import { LakeService } from '../../services/lake/lake.service';

@Component({
  selector: 'app-lake-table',
  templateUrl: './lake-table.component.html',
  styleUrls: ['./lake-table.component.scss'],
})
export class LakeTableComponent implements OnInit {
  public lakeData: Lake[] = [];
  displayedColumns: string[] = ['name', 'location'];
  constructor(private lakeService: LakeService) {}

  ngOnInit(): void {
    this.getLakes();
  }

  public getLakes(): void {
    this.lakeService.getAllLakes().subscribe({
      next: (response: Lake[]) => {
        this.lakeData = response;
      },
    });
  }
}
