import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtService } from '../jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginData = { username: '', password: '' };
  errorMessage: string = '';
  showPassword : boolean = false;

  constructor(private http: HttpClient, private router: Router, private jwt: JwtService) { }

  ngOnInit(): void {
    sessionStorage.removeItem('jwtToken');
  }

  login() {
    this.http.post('https://localhost:7072/api/auth/login', this.loginData, { responseType: 'json' })
      .subscribe({
        next: (response: any) => {
          if (response && response.token) {
            sessionStorage.setItem('jwtToken', response.token);
            this.jwt.setUserData(response.token);
            this.router.navigate(['/dashboard/home']);
          } else {
            console.log('No token found in response');
          }
        },
        error: (err) => {
          console.log('Error:', err);
          this.errorMessage = 'Invalid credentials';
        }
      });
  }
}
