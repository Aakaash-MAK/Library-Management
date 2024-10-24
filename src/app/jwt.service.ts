import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class JwtService {
  private userSubject = new BehaviorSubject<{ username: string; role: string } | null>(null);
  user$ = this.userSubject.asObservable();
  role = "";
  username = "";

  constructor() {
    const token = sessionStorage.getItem('jwtToken');
    if (token) {
      this.setUserData(token);
    }
  }

  setUserData(token: string) {
    const decodedToken = this.getdataFromToken(token);
    if (decodedToken) {
      this.role = decodedToken.role;
      this.username = decodedToken.sub;
      this.userSubject.next({ username: this.username, role: this.role });
    }
  }

  getdataFromToken(token: string) {
    try {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      return decodedToken;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }
}