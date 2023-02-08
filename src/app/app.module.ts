import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LureTableComponent } from '../app/stats/lure-table/lure-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { LakeTableComponent } from '../app/stats/lake-table/lake-table.component';
import { CatchTableComponent } from './stats/catch-table/catch-table.component';
import { CatchFormComponent } from './forms/catch-form/catch-form.component';
import { MatButtonModule } from '@angular/material/button';
import { FishCountComponent } from './stats/fish-count/fish-count.component';
import { HeaderComponent } from './shared/header/header.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FactsContainerComponent } from './stats/facts-container/facts-container.component';

@NgModule({
  declarations: [
    AppComponent,
    LureTableComponent,
    LakeTableComponent,
    CatchTableComponent,
    CatchFormComponent,
    FishCountComponent,
    HeaderComponent,
    FactsContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatSliderModule,
    MatButtonModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
