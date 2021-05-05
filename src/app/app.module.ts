import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { BarComponent } from './bar/bar.component';
import { NewsComponent } from './news/news.component';
import { RankingsComponent } from './rankings/rankings.component';
import { ButtonComponent } from './button/button.component';
import localePl from '@angular/common/locales/pl';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePl);

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    BarComponent,
    NewsComponent,
    RankingsComponent,
    ButtonComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
