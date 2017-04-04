import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PomodoroclockComponent } from './pomodoroclock.component';

describe('PomodoroclockComponent', () => {
  let component: PomodoroclockComponent;
  let fixture: ComponentFixture<PomodoroclockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PomodoroclockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PomodoroclockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
