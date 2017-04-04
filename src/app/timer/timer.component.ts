import { Component, OnChanges, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnChanges {
  @Input()
  time: number = 25;

  minutes: number;
  seconds: number;
  interval;

  @Output()
  isTimerRunning: EventEmitter<boolean> = new EventEmitter();

  @Output()
  timerFinished: EventEmitter<boolean> = new EventEmitter();


  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['time']) {
      this.minutes = this.time;
      this.seconds = 0;
      this.time *= 60; // convert minutes to seconds
    }
  }

  updateTime() {
    this.time--;
    this.seconds = this.time % 60;
    this.minutes = Math.floor(this.time / 60);

    if (this.time === 0) {
      clearInterval(this.interval);
      this.timerFinished.emit(true);
    }
  }

  start() {
    this.interval = setInterval (this.updateTime.bind(this), 1000);
    this.isTimerRunning.emit(true);
  }

  stop() {
    clearInterval(this.interval);
    this.isTimerRunning.emit(false);
  }

}
