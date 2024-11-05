import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(private _authService: AuthenticationService) {}

  ngOnInit() {
    this._authService.authStatus$.subscribe((status) => {
      this.isAuthenticated = status;
    });
  }

  logout() {
    this._authService.logout();
  }
}
