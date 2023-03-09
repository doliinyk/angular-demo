import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CarListComponent } from './components/car/car-list.component';
import { CarSearchPipe } from './pipes/car-search.pipe';
import { FormsModule } from "@angular/forms";

@NgModule({
	declarations: [
		AppComponent,
		CarListComponent,
		CarSearchPipe,
	],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
