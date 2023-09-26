import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UiModule, UiService } from 'ui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    AppRoutingModule
  ],
  providers: [UiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
