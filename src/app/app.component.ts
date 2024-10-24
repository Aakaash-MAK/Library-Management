import { Component } from '@angular/core';
import { BooksService } from './books.service';
import { JwtService } from './jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'library';
}
