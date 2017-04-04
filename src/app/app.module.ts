import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TimechangerComponent } from './timechanger/timechanger.component';
import { PomodoroclockComponent } from './pomodoroclock/pomodoroclock.component';
import { TimerComponent } from './timer/timer.component';
import { PadWithLeadingZerosPipe } from './pad-with-leading-zeros.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TimechangerComponent,
    PomodoroclockComponent,
    TimerComponent,
    PadWithLeadingZerosPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
