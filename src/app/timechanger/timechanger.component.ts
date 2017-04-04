import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-timechanger',
  templateUrl: './timechanger.component.html',
  styleUrls: ['./timechanger.component.css']
})
export class TimechangerComponent implements OnChanges {

  @Input()
  value:number = 25;

  @Input()
  canChange: boolean = true;

  @Output()
  valueChange:EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['canChange']) {
      this.canChange = changes['canChange'].currentValue;
    }
  }

  incrementValue() {
    if (!this.canChange) return;
    this.value++;
    this.valueChange.emit(this.value);
  }

  decrementValue() {
    if (!this.canChange) return;

    // no decrement beyond 1
    if (this.value === 1) return;

    this.value--;
    this.valueChange.emit(this.value);
  }

}
