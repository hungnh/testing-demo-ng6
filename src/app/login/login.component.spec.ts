import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {AuthService} from '../services/auth.service';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('LoginComponent', () => {

  // A fixture is a wrapper for a component and it’s template.
  let fixture: ComponentFixture<LoginComponent>;

  // Component to test
  let component: LoginComponent;

  let authService: AuthService;

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
  });

  it('should be created', () => {
    // component should be created
    expect(component).toBeTruthy();
  });

  it('needsLogin returns true when user is not authenticated', () => {
    // create a spy on our service so that if the isAuthenticated function is called it returns false
    spyOn(authService, 'isAuthenticated').and.returnValue(false);

    expect(component.needsLogin()).toBeTruthy();

    // check to see if the isAuthenticated function was called.
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });

  it('needsLogin returns false when user is authenticated', () => {
    // create a spy on our service so that if the isAuthenticated function is called it returns false
    spyOn(authService, 'isAuthenticated').and.returnValue(true);

    expect(component.needsLogin()).toBeFalsy();

    // check to see if the isAuthenticated function was called.
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });
});
