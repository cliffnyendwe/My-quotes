import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { QUOTESComponent } from './quotes/quotes.component';
import { DateCountPipe } from './date-count.pipe';
import { QuoteFormComponent } from './quotes-form/quotes-form.component';
import { QUOTESDetailsComponent } from './quotes-details/quotes-details.component';

@NgModule({
  declarations: [
    AppComponent,
    QUOTESComponent,
    DateCountPipe,
    QuoteFormComponent,
    QUOTESDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
