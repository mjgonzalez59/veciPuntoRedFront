import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { DialogService } from 'src/app/core/services/dialog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _authService: AuthenticationService,
    private _router: Router,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { user, password } = this.loginForm.value;
      localStorage.setItem('username', user);
      localStorage.setItem('password', password);
      this._authService.login(this.loginForm.value).subscribe(
        (response) => {
          if (response.status === 200) {
            this._router.navigate(['/services']);
          } else {
            console.error('Login failed');
            localStorage.removeItem('username');
            localStorage.removeItem('password');
          }
        },
        (error) => console.error('Login failed', error)
      );
    } else {
      this.dialogService.openDialog(
        'Cuidado',
        'Hay algunos campos que no has diligenciado correctamente'
      );
    }
  }
}
