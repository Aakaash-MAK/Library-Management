import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from '../jwt.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'library';
  role : string = "";
  username : string = '';
  

  ngOnInit(): void {
    const token = sessionStorage.getItem('jwtToken');
    if(token){
      this.role = this.jwt.getdataFromToken(token).role;
      this.username = this.jwt.getdataFromToken(token).sub;
    }
  }

  constructor(private router: Router,private jwt:JwtService) {}
  
  logout() {
    this.router.navigate(['/login']);
  }
}