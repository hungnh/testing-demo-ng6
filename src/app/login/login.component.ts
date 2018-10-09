import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  needsLogin = true;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.isAuthenticated().subscribe(authenticated => {
      this.needsLogin = !authenticated;
    });
  }
}
