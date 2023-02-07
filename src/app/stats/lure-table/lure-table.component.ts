import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Lure } from '../../models/lure.model';
import { LureService } from '../../services/lure/lure.service';

@Component({
  selector: 'app-lure-table',
  templateUrl: './lure-table.component.html',
  styleUrls: ['./lure-table.component.scss'],
})
export class LureTableComponent implements OnInit {
  public lureData: Lure[] = [];
  constructor(private lureService: LureService) {}

  ngOnInit(): void {
    this.getLures();
  }

  public getLures(): void {
    this.lureService.getAllLures().subscribe({
      next: (response: Lure[]) => {
        this.lureData = response;
      },
    });
  }

  displayedColumns: string[] = ['brand', 'model', 'color', 'weight'];
}
