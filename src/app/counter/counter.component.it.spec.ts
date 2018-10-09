import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {CounterComponent} from './counter.component';
import {FormsModule} from '@angular/forms';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('CounterComponent Integration Test', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let debugEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [CounterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase counter value', fakeAsync(() => {
    expect(component.value).toEqual(0);

    const increaseButton = debugEl.query(By.css('button#increase-btn'));
    increaseButton.triggerEventHandler('click', null);

    fixture.detectChanges();
    tick();

    const counterValueInput = debugEl.query(By.css('input#counter-value'));
    expect(counterValueInput.nativeElement.value).toEqual('1');
  }));


  it('should decrease counter value', fakeAsync(() => {
    component.value = 10;

    const decreaseButton = debugEl.query(By.css('button#decrease-btn'));
    decreaseButton.triggerEventHandler('click', null);

    fixture.detectChanges();
    tick();

    const counterValueInput = debugEl.query(By.css('input#counter-value'));
    expect(counterValueInput.nativeElement.value).toEqual('9');
  }));
});
