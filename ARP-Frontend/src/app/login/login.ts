import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginUser: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.loginUser, this.password).subscribe({
      next: (res) => {
        const role = res.role;

        // Redirection selon le rôle
        if (role === 'SUPERADMIN') this.router.navigate(['/superadmin-dashboard']);
        else if (role === 'ADMIN') this.router.navigate(['/admin-dashboard']);
        else this.router.navigate(['/user-dashboard']);
      },
      error: () => {
        this.errorMessage = 'Identifiants invalides';
      }
    });
  }
}
