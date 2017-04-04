import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pomodoroclock',
  templateUrl: './pomodoroclock.component.html',
  styleUrls: ['./pomodoroclock.component.css']
})
export class PomodoroclockComponent {
  workTiming: number = 25;
  intervalTiming: number = 5;
  canChange: boolean = true;
  isworkTimingRunning: boolean = true;

  @ViewChild('timer') timer;


  constructor() { }

  changeUpdateState(evt) {
    this.canChange = !evt;
  }

  changeTiming(evt) {
    this.isworkTimingRunning = !this.isworkTimingRunning;
    this.timer.start();
  }

  get currentTiming() {
    if (this.isworkTimingRunning) return this.workTiming;
    else return this.intervalTiming;
  }
}
