import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import {FormsModule} from '@angular/forms';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase counter value', function () {
    expect(component.value).toEqual(0);
    component.increase();
    expect(component.value).toEqual(1);
  });

  it('should decrease counter value', function () {
    component.value = 10;
    component.decrease();
    expect(component.value).toEqual(9);
  });
});
