import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '../services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private AuthService: AuthService) { }

  ngOnInit() {
    this.AuthService.check();
  }

  logout() {
    this.AuthService.logout();
  }
}
