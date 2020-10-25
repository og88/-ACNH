import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { FishComponent } from './fish/fish.component';
import { PaintingsComponent } from './paintings/paintings.component';

@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    FishComponent,
    PaintingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
