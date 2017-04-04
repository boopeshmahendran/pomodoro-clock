import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimechangerComponent } from './timechanger.component';

describe('TimechangerComponent', () => {
  let component: TimechangerComponent;
  let fixture: ComponentFixture<TimechangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimechangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimechangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
