import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LureTableComponent } from '../app/stats-page/lure-table/lure-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { LakeTableComponent } from '../app/stats-page/lake-table/lake-table.component';
import { CatchTableComponent } from './stats-page/catch-table/catch-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LureTableComponent,
    LakeTableComponent,
    CatchTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
