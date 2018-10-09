import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  isAuthenticated(): Observable<boolean> {
    return of(!!localStorage.getItem('token'));
  }
}
