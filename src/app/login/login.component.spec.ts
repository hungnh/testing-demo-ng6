import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {AuthService} from '../services/auth.service';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {of} from 'rxjs';

describe('LoginComponent', () => {

  // A fixture is a wrapper for a component and it’s template.
  let fixture: ComponentFixture<LoginComponent>;

  // Component to test
  let component: LoginComponent;

  let authService: AuthService;

  // DebugElement - this is a wrapper to the low level DOM element that represents the components view
  let debugEl: DebugElement;

  beforeEach(async(() => {
    // Configure a testing module using the TestBed class
    // This creates a test Angular Module which we can use to instantiate components, perform dependency injection and so on.
    // Configure it in exactly the same way as we would configure a normal NgModule
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    // We create an instance of a component fixture through the TestBed,
    // this injects the AuthService into the component constructor automatically.
    fixture = TestBed.createComponent(LoginComponent);

    // get test component instance from the fixture
    component = fixture.componentInstance;

    // resolve AuthService dependency using the TestBed injector by using the "get" function.
    authService = TestBed.get(AuthService);

    // the "fixture" also holds a reference to the DebugElement,
    debugEl = fixture.debugElement;

    // fixture is a wrapper for our components environment so we can control things like change detection.
    // To trigger change detection we call the function fixture.detectChanges()
    fixture.detectChanges();
  });

  it('should be created', () => {
    // component should be created
    expect(component).toBeTruthy();
  });

  it('needsLogin returns true when user is not authenticated', () => {
    // create a spy on our service so that if the isAuthenticated function is called it returns false
    spyOn(authService, 'isAuthenticated').and.returnValue(of(false));

    // When performing testing we need to call component lifecycle hooks ourselves, like ngOnInit().
    // Angular won’t do this for us in the test environment.
    component.ngOnInit();

    expect(component.needsLogin).toBeTruthy();

    // check to see if the isAuthenticated function was called.
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });

  it('needsLogin returns false when user is authenticated', () => {
    // create a spy on our service so that if the isAuthenticated function is called it returns false
    spyOn(authService, 'isAuthenticated').and.returnValue(of(true));

    component.ngOnInit();

    expect(component.needsLogin).toBeFalsy();

    // check to see if the isAuthenticated function was called.
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });

  it('should show login button when user is not authenticated', () => {
    // we can get references to other child nodes by querying the DebugElement with a By class.
    const button = debugEl.query(By.css('button')).nativeElement;
    expect(button.textContent.trim()).toBe('Login');
  });

  it('should show logout button when user is authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(of(true));

    component.ngOnInit();

    fixture.detectChanges(); // Trigger change detection

    const button = debugEl.query(By.css('button')).nativeElement;
    expect(button.textContent.trim()).toBe('Logout');
  });
});
