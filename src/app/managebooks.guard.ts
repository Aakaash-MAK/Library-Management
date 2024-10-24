import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class ManageBooksGuard {

  constructor(private jwt:JwtService, private router: Router) {}

  canActivate(): boolean {

    const role = this.jwt.role;

    if (role !== 'librarian') {
      this.router.navigate(['dashboard/home']); 
      return false;
    }
    
    return true;
  }
}